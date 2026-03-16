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

  type SiteSettings = {
    announcement : Text;
    announcementEnabled : Bool;
    featuredMessage : Text;
    lastUpdated : Int;
    updatedBy : Text;
  };

  type UserWithRole = {
    principal : Text;
    displayName : Text;
    studentClass : Text;
    createdAt : Int;
    role : Text;
  };

  // ─── Stable storage arrays (survive upgrades) ────────────────────────────
  stable var userProfileEntries    : [(Principal, UserProfile)]    = [];
  stable var userProgressEntries   : [(Text, UserProgress)]        = [];
  stable var leaderboardEntries    : [(Text, LeaderboardEntry)]    = [];
  stable var operatorEntries       : [(Principal, Bool)]           = [];
  stable var siteSettingsEntries   : [(Text, SiteSettings)]        = [];
  stable var topicEntries          : [(Nat, Topic)]                = [];

  // ─── Working memory maps (rebuilt from stable arrays on upgrade) ─────────
  var topics            = Map.empty<Nat, Topic>();
  var questions         = Map.empty<Nat, MCQQuestion>();
  var flashcards        = Map.empty<Nat, Flashcard>();
  var cheatsheets       = Map.empty<Nat, CheatSheetEntry>();
  var userProgress      = Map.empty<Text, UserProgress>();
  var leaderboard       = Map.empty<Text, LeaderboardEntry>();
  var userProfiles      = Map.empty<Principal, UserProfile>();
  var operators         = Map.empty<Principal, Bool>();
  var siteSettingsStore = Map.empty<Text, SiteSettings>();

  // Comparison module for LeaderboardEntry
  module LeaderboardEntry {
    public func compareByXP(a : LeaderboardEntry, b : LeaderboardEntry) : Order.Order {
      Nat.compare(b.xp, a.xp);
    };
  };

  // Helper: check if a principal is an operator
  func isOperator(p : Principal) : Bool {
    switch (operators.get(p)) {
      case (?true) { true };
      case (_) { false };
    };
  };

  // Helper: check if caller has admin or operator permission
  func isAdminOrOperator(p : Principal) : Bool {
    AccessControl.isAdmin(accessControlState, p) or isOperator(p);
  };

  // Helper: compute level from XP
  func xpToLevel(xp : Nat) : Nat {
    if (xp >= 600) { 4 } else if (xp >= 300) { 3 } else if (xp >= 100) { 2 } else { 1 };
  };

  // Helper: compute badges from XP and streak
  func computeBadges(xp : Nat, streak : Nat) : [Text] {
    let badges = List.empty<Text>();
    if (xp >= 600) { badges.add("🏆 Champion") };
    if (xp >= 300 and xp < 600) { badges.add("⭐ Expert") };
    if (xp >= 100 and xp < 300) { badges.add("📚 Scholar") };
    if (streak >= 7) { badges.add("🔥 Hot Streak") };
    if (streak >= 14) { badges.add("⚡ Unstoppable") };
    badges.toArray();
  };

  // ─── Persist all maps to stable arrays before any upgrade ───────────────
  system func preupgrade() {
    userProfileEntries  := userProfiles.entries().toArray();
    userProgressEntries := userProgress.entries().toArray();
    leaderboardEntries  := leaderboard.entries().toArray();
    operatorEntries     := operators.entries().toArray();
    siteSettingsEntries := siteSettingsStore.entries().toArray();
    topicEntries        := topics.entries().toArray();
  };

  // ─── Restore from stable arrays after upgrade ────────────────────────────
  system func postupgrade() {
    // Restore user data
    for ((k, v) in userProfileEntries.values()) {
      userProfiles.add(k, v);
    };
    for ((k, v) in userProgressEntries.values()) {
      userProgress.add(k, v);
    };
    for ((k, v) in leaderboardEntries.values()) {
      leaderboard.add(k, v);
    };
    for ((k, v) in operatorEntries.values()) {
      operators.add(k, v);
    };
    for ((k, v) in siteSettingsEntries.values()) {
      siteSettingsStore.add(k, v);
    };
    for ((k, v) in topicEntries.values()) {
      topics.add(k, v);
    };

    // Seed default topics only on first deploy (when topics is empty)
    if (topics.size() == 0) {
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
    };

    // Free stable arrays to save memory
    userProfileEntries  := [];
    userProgressEntries := [];
    leaderboardEntries  := [];
    operatorEntries     := [];
    siteSettingsEntries := [];
    topicEntries        := [];
  };

  // ─── Core Functions - Public (no auth required) ──────────────────────────

  public query ({ caller }) func getAllTopics() : async [Topic] {
    topics.values().toArray();
  };

  public query ({ caller }) func getTopicById(id : Nat) : async ?Topic {
    topics.get(id);
  };

  public query ({ caller }) func getLeaderboard() : async [LeaderboardEntry] {
    let entries = leaderboard.values().toArray();
    let sortedEntries = entries.sort(LeaderboardEntry.compareByXP);
    let ranked = List.empty<LeaderboardEntry>();
    var rank = 1;
    for (entry in sortedEntries.values()) {
      ranked.add({
        rank;
        username = entry.username;
        xp = entry.xp;
        level = entry.level;
        badges = entry.badges;
        streak = entry.streak;
      });
      rank += 1;
    };
    let take20 = List.empty<LeaderboardEntry>();
    var count = 0;
    for (entry in ranked.toArray().values()) {
      if (count < 20) {
        take20.add(entry);
        count += 1;
      };
    };
    take20.toArray();
  };

  // ─── Site Settings ────────────────────────────────────────────────────────

  public query ({ caller }) func getSiteSettings() : async ?SiteSettings {
    siteSettingsStore.get("main");
  };

  public shared ({ caller }) func updateSiteSettings(
    announcement : Text,
    announcementEnabled : Bool,
    featuredMessage : Text,
  ) : async SiteSettings {
    if (not isAdminOrOperator(caller)) {
      Runtime.trap("Unauthorized: Only admin or operator can update site settings");
    };
    let settings : SiteSettings = {
      announcement;
      announcementEnabled;
      featuredMessage;
      lastUpdated = Time.now();
      updatedBy = caller.toText();
    };
    siteSettingsStore.add("main", settings);
    settings;
  };

  // ─── Role Management ──────────────────────────────────────────────────────

  public query ({ caller }) func getCallerRole() : async Text {
    if (AccessControl.isAdmin(accessControlState, caller)) {
      "admin"
    } else if (isOperator(caller)) {
      "operator"
    } else {
      "user"
    };
  };

  public shared ({ caller }) func assignOperatorRole(user : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can assign the operator role");
    };
    operators.add(user, true);
  };

  public shared ({ caller }) func dismissOperator(user : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can dismiss operators");
    };
    ignore operators.remove(user);
  };

  public query ({ caller }) func getAllUsersWithRoles() : async [UserWithRole] {
    if (not isAdminOrOperator(caller)) {
      Runtime.trap("Unauthorized: Only admin or operator can view all users");
    };
    let result = List.empty<UserWithRole>();
    for ((p, profile) in userProfiles.entries()) {
      let role = if (AccessControl.isAdmin(accessControlState, p)) {
        "admin"
      } else if (isOperator(p)) {
        "operator"
      } else {
        "user"
      };
      result.add({
        principal = profile.principal;
        displayName = profile.displayName;
        studentClass = profile.studentClass;
        createdAt = profile.createdAt;
        role;
      });
    };
    result.toArray();
  };

  public query ({ caller }) func getAllOperators() : async [Text] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can view operator list");
    };
    let result = List.empty<Text>();
    for ((p, _) in operators.entries()) {
      result.add(p.toText());
    };
    result.toArray();
  };

  public query ({ caller }) func isCallerOperator() : async Bool {
    isOperator(caller);
  };

  public shared ({ caller }) func deleteUserProfile(user : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admin can delete user profiles");
    };
    ignore userProfiles.remove(user);
  };

  // ─── User Functions ────────────────────────────────────────────────────────

  public shared ({ caller }) func submitQuizResult(userId : Text, topicId : Nat, score : Nat) : async (Nat, Nat) {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can submit quiz results");
    };

    let earnedXP = score * 10;

    let (updatedXP, updatedStreak) = switch (userProgress.get(userId)) {
      case (null) {
        let newProgress : UserProgress = {
          userId;
          topicId;
          xp = earnedXP;
          level = xpToLevel(earnedXP);
          streak = 1;
          lastQuizScore = score;
          masteredFlashcards = [];
        };
        userProgress.add(userId, newProgress);
        (earnedXP, 1);
      };
      case (?progress) {
        let newXP = progress.xp + earnedXP;
        let newStreak = if (score > 0) { progress.streak + 1 } else { 0 };
        let newProgress : UserProgress = {
          userId = progress.userId;
          topicId = progress.topicId;
          xp = newXP;
          level = xpToLevel(newXP);
          streak = newStreak;
          lastQuizScore = score;
          masteredFlashcards = progress.masteredFlashcards;
        };
        userProgress.add(userId, newProgress);
        (newXP, newStreak);
      };
    };

    let newLevel = xpToLevel(updatedXP);
    let newBadges = computeBadges(updatedXP, updatedStreak);
    leaderboard.add(
      userId,
      {
        rank = 0;
        username = userId;
        xp = updatedXP;
        level = newLevel;
        badges = newBadges;
        streak = updatedStreak;
      },
    );

    (updatedXP, updatedStreak);
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
        Runtime.trap("User not found in progress records.");
      };
    };
  };

  public shared ({ caller }) func addBlogXP(userId : Text, xpAmount : Nat) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can earn blog XP");
    };

    let updatedXP = switch (userProgress.get(userId)) {
      case (null) {
        let newProgress : UserProgress = {
          userId;
          topicId = 0;
          xp = xpAmount;
          level = xpToLevel(xpAmount);
          streak = 0;
          lastQuizScore = 0;
          masteredFlashcards = [];
        };
        userProgress.add(userId, newProgress);
        xpAmount;
      };
      case (?progress) {
        let newXP = progress.xp + xpAmount;
        let newProgress : UserProgress = {
          userId = progress.userId;
          topicId = progress.topicId;
          xp = newXP;
          level = xpToLevel(newXP);
          streak = progress.streak;
          lastQuizScore = progress.lastQuizScore;
          masteredFlashcards = progress.masteredFlashcards;
        };
        userProgress.add(userId, newProgress);
        newXP;
      };
    };

    let existingStreak = switch (leaderboard.get(userId)) {
      case (?entry) { entry.streak };
      case (null) { 0 };
    };
    leaderboard.add(
      userId,
      {
        rank = 0;
        username = userId;
        xp = updatedXP;
        level = xpToLevel(updatedXP);
        badges = computeBadges(updatedXP, existingStreak);
        streak = existingStreak;
      },
    );

    updatedXP;
  };

  // ─── User Profile Functions ─────────────────────────────────────────────

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
