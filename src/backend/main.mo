import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Principal "mo:core/Principal";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";


actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Data Types
  type Topic = {
    id : Nat;
    board : Text;
    className : Text;
    subject : Text;
    chapter : Text;
    microTopic : Text;
    questionCount : Nat;
    difficulty : Text;
    description : Text;
  };

  type MCQQuestion = {
    id : Nat;
    topicId : Nat;
    question : Text;
    options : [Text];
    correctIndex : Nat;
    explanation : Text;
    xpValue : Nat;
  };

  type Flashcard = {
    id : Nat;
    topicId : Nat;
    frontQuestion : Text;
    backAnswer : Text;
    backExplanation : Text;
  };

  type CheatSheetEntry = {
    id : Nat;
    topicId : Nat;
    entryType : Text;
    title : Text;
    content : Text;
    icon : Text;
  };

  type UserProgress = {
    userId : Text;
    topicId : Nat;
    xp : Nat;
    level : Nat;
    streak : Nat;
    lastQuizScore : Nat;
    masteredFlashcards : [Nat];
  };

  type LeaderboardEntry = {
    rank : Nat;
    username : Text;
    xp : Nat;
    level : Nat;
    badges : [Text];
    streak : Nat;
  };

  type GeneratedContent = {
    topicId : Nat;
    mcqCount : Nat;
    flashcardCount : Nat;
    cheatsheetCount : Nat;
    generatedAt : Int;
  };

  type UserProfile = {
    principal : Text;
    displayName : Text;
    studentClass : Text;
    createdAt : Int;
  };

  // Comparison module for LeaderboardEntry
  module LeaderboardEntry {
    public func compareByXP(a : LeaderboardEntry, b : LeaderboardEntry) : Order.Order {
      Nat.compare(b.xp, a.xp);
    };
  };

  // Storage
  let topics = Map.empty<Nat, Topic>();
  let questions = Map.empty<Nat, MCQQuestion>();
  let flashcards = Map.empty<Nat, Flashcard>();
  let cheatsheets = Map.empty<Nat, CheatSheetEntry>();
  let userProgress = Map.empty<Text, UserProgress>();
  let leaderboard = Map.empty<Text, LeaderboardEntry>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // System Initialization
  system func postupgrade() {
    // Topics
    topics.add(
      1,
      {
        id = 1;
        board = "CBSE";
        className = "10";
        subject = "Science";
        chapter = "Carbon Compounds";
        microTopic = "";
        questionCount = 10;
        difficulty = "Medium";
        description = "Study Organic Chemistry basics and compounds.";
      },
    );
    topics.add(
      2,
      {
        id = 2;
        board = "CBSE";
        className = "10";
        subject = "Math";
        chapter = "Quadratic Equations";
        microTopic = "";
        questionCount = 10;
        difficulty = "Hard";
        description = "Practice solving quadratic equations.";
      },
    );
    topics.add(
      3,
      {
        id = 3;
        board = "CBSE";
        className = "9";
        subject = "History";
        chapter = "French Revolution";
        microTopic = "";
        questionCount = 10;
        difficulty = "Medium";
        description = "Explore the causes and effects of the French Revolution.";
      },
    );

    // Leaderboard Entries
    leaderboard.add(
      "student1",
      {
        rank = 1;
        username = "student1";
        xp = 1500;
        level = 10;
        badges = ["Mathlete", "Science Whiz"];
        streak = 15;
      },
    );
    leaderboard.add(
      "student2",
      {
        rank = 2;
        username = "student2";
        xp = 1200;
        level = 8;
        badges = ["Historian"];
        streak = 10;
      },
    );
    leaderboard.add(
      "student3",
      {
        rank = 3;
        username = "student3";
        xp = 1100;
        level = 7;
        badges = ["Science Whiz"];
        streak = 12;
      },
    );
    leaderboard.add(
      "student4",
      {
        rank = 4;
        username = "student4";
        xp = 950;
        level = 6;
        badges = [];
        streak = 9;
      },
    );
    leaderboard.add(
      "student5",
      {
        rank = 5;
        username = "student5";
        xp = 800;
        level = 5;
        badges = ["Mathlete"];
        streak = 7;
      },
    );
    leaderboard.add(
      "student6",
      {
        rank = 6;
        username = "student6";
        xp = 750;
        level = 5;
        badges = [];
        streak = 6;
      },
    );
    leaderboard.add(
      "student7",
      {
        rank = 7;
        username = "student7";
        xp = 700;
        level = 4;
        badges = [];
        streak = 5;
      },
    );
    leaderboard.add(
      "student8",
      {
        rank = 8;
        username = "student8";
        xp = 650;
        level = 4;
        badges = [];
        streak = 4;
      },
    );
    leaderboard.add(
      "student9",
      {
        rank = 9;
        username = "student9";
        xp = 600;
        level = 3;
        badges = [];
        streak = 3;
      },
    );
    leaderboard.add(
      "student10",
      {
        rank = 10;
        username = "student10";
        xp = 550;
        level = 3;
        badges = [];
        streak = 2;
      },
    );
  };

  // Core Functions - Public (no auth required)
  public query ({ caller }) func getAllTopics() : async [Topic] {
    topics.values().toArray();
  };

  public query ({ caller }) func getTopicById(id : Nat) : async ?Topic {
    topics.get(id);
  };

  public query ({ caller }) func getLeaderboard() : async [LeaderboardEntry] {
    let entries = leaderboard.values().toArray();
    let sortedEntries = entries.sort(LeaderboardEntry.compareByXP);
    let take20 = List.empty<LeaderboardEntry>();
    var count = 0;
    for (entry in sortedEntries.values()) {
      if (count < 20) {
        take20.add(entry);
        count += 1;
      };
    };
    take20.toArray();
  };

  // User-only functions (require user role)
  public shared ({ caller }) func submitQuizResult(userId : Text, topicId : Nat, score : Nat) : async (Nat, Nat) {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit quiz results");
    };
    switch (userProgress.get(userId)) {
      case (null) {
        let newProgress : UserProgress = {
          userId;
          topicId;
          xp = score * 10;
          level = 1;
          streak = 1;
          lastQuizScore = score;
          masteredFlashcards = [];
        };
        userProgress.add(userId, newProgress);
        (newProgress.xp, newProgress.streak);
      };
      case (?progress) {
        let updatedXP = progress.xp + score * 10;
        let updatedStreak = if (score > 0) {
          progress.streak + 1;
        } else {
          0;
        };
        let newProgress : UserProgress = {
          userId = progress.userId;
          topicId = progress.topicId;
          xp = updatedXP;
          level = progress.level;
          streak = updatedStreak;
          lastQuizScore = score;
          masteredFlashcards = progress.masteredFlashcards;
        };
        userProgress.add(userId, newProgress);
        (updatedXP, updatedStreak);
      };
    };
  };

  public shared ({ caller }) func simulateAIContentGeneration(topicId : Nat, rawText : Text) : async GeneratedContent {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can generate AI content");
    };
    {
      topicId;
      mcqCount = 10;
      flashcardCount = 8;
      cheatsheetCount = 6;
      generatedAt = Time.now();
    };
  };

  public shared ({ caller }) func markFlashcardMastered(userId : Text, flashcardId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can mark flashcards as mastered");
    };
    switch (userProgress.get(userId)) {
      case (?progress) {
        let masteredList = List.fromArray<Nat>(progress.masteredFlashcards);
        masteredList.add(flashcardId);
        let newProgress : UserProgress = {
          userId = progress.userId;
          topicId = progress.topicId;
          xp = progress.xp;
          level = progress.level;
          streak = progress.streak;
          lastQuizScore = progress.lastQuizScore;
          masteredFlashcards = masteredList.toArray();
        };
        userProgress.add(userId, newProgress);
      };
      case (null) {
        Runtime.trap("User not found in progress records. Please complete a quiz or flashcard session first.");
      };
    };
  };

  // User Profile Functions (following the required pattern)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(displayName : Text, studentClass : Text) : async UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    let currentTime = Time.now();
    let profile : UserProfile = {
      principal = caller.toText();
      displayName;
      studentClass;
      createdAt = currentTime;
    };
    userProfiles.add(caller, profile);
    profile;
  };

  // Legacy function for backward compatibility (requires user role)
  public shared ({ caller }) func saveUserProfile(displayName : Text, studentClass : Text) : async UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    let currentTime = Time.now();
    let profile : UserProfile = {
      principal = caller.toText();
      displayName;
      studentClass;
      createdAt = currentTime;
    };
    userProfiles.add(caller, profile);
    profile;
  };
};
