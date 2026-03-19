import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Bool "mo:core/Bool";

module {
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

  type UserAccount = {
    username : Text;
    passwordHash : Text;
    fullName : Text;
    email : Text;
    createdAt : Int;
    lastLoginAt : Int;
  };

  type OldActor = {
    topics : Map.Map<Nat, Topic>;
    questions : Map.Map<Nat, MCQQuestion>;
    flashcards : Map.Map<Nat, Flashcard>;
    cheatsheets : Map.Map<Nat, CheatSheetEntry>;
    userProgress : Map.Map<Text, UserProgress>;
    leaderboard : Map.Map<Text, LeaderboardEntry>;
    userProfiles : Map.Map<Principal, UserProfile>;
    operators : Map.Map<Principal, Bool>;
    siteSettingsStore : Map.Map<Text, SiteSettings>;
  };

  type NewActor = {
    topics : Map.Map<Nat, Topic>;
    questions : Map.Map<Nat, MCQQuestion>;
    flashcards : Map.Map<Nat, Flashcard>;
    cheatsheets : Map.Map<Nat, CheatSheetEntry>;
    userProgress : Map.Map<Text, UserProgress>;
    leaderboard : Map.Map<Text, LeaderboardEntry>;
    userProfiles : Map.Map<Principal, UserProfile>;
    operators : Map.Map<Principal, Bool>;
    siteSettingsStore : Map.Map<Text, SiteSettings>;
    userAccounts : Map.Map<Text, UserAccount>;
  };

  public func run(old : OldActor) : NewActor {
    // Initialize empty user accounts
    { old with userAccounts = Map.empty<Text, UserAccount>() };
  };
};
