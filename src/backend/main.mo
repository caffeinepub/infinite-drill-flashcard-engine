import Map "mo:core/Map";
import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

import Principal "mo:core/Principal";

import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";

actor {
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

  type UserAccount = {
    username : Text;
    passwordHash : Text;
    fullName : Text;
    email : Text;
    createdAt : Int;
    lastLoginAt : Int;
  };

  type UsernameRole = {
    username : Text;
    role : Text;
    createdBy : Text;
    createdAt : Int;
  };

  // ─── BlogPost Types ─────────────────────────────────────────────
  type BlogPost = {
    id : Nat;
    title : Text;
    description : Text;
    content : Text;
    authorName : Text;
    authorUsername : Text;
    createdAt : Int;
    published : Bool;
    imageUrl : Text;
  };

  // ─── ChatMessage Type ──────────────────────────────────────────────
  type ChatMessage = {
    id : Nat;
    roomId : Text;
    senderUsername : Text;
    senderName : Text;
    messageType : Text; // "text", "image", "audio"
    content : Text;
    timestamp : Int;
  };

  // ─── Stable storage arrays (survive upgrades) ───────────────────────
  stable var userProfileEntries : [(Principal, UserProfile)] = [];
  stable var userProgressEntries : [(Text, UserProgress)] = [];
  stable var leaderboardEntries : [(Text, LeaderboardEntry)] = [];
  stable var operatorEntries : [(Principal, Bool)] = [];
  stable var siteSettingsEntries : [(Text, SiteSettings)] = [];
  stable var topicEntries : [(Nat, Topic)] = [];
  stable var userAccountEntries : [(Text, UserAccount)] = [];
  stable var adminUsernamesStable : [Text] = ["Abhinav"];
  stable var usernameRolesStable : [(Text, Text)] = [];
  stable var blogPostsStable : [(Nat, BlogPost)] = [];
  stable var nextBlogPostIdStable = 1;
  stable var chatMessagesStable : [(Nat, ChatMessage)] = [];
  stable var nextChatMessageIdStable : Nat = 1;

  // ─── Working memory maps (rebuilt from stable arrays on upgrade) ─────────────────
  var topics = Map.empty<Nat, Topic>();
  var questions = Map.empty<Nat, MCQQuestion>();
  var flashcards = Map.empty<Nat, Flashcard>();
  var cheatsheets = Map.empty<Nat, CheatSheetEntry>();
  var userProgress = Map.empty<Text, UserProgress>();
  var leaderboard = Map.empty<Text, LeaderboardEntry>();
  var userProfiles = Map.empty<Principal, UserProfile>();
  var operators = Map.empty<Principal, Bool>();
  var siteSettingsStore = Map.empty<Text, SiteSettings>();
  var userAccounts = Map.empty<Text, UserAccount>();
  var adminUsernames = Map.empty<Text, Bool>();
  var usernameRoles = Map.empty<Text, Text>();
  var blogPosts = Map.empty<Nat, BlogPost>();
  var nextBlogPostId = 1;
  var chatMessages = Map.empty<Nat, ChatMessage>();
  var nextChatMessageId : Nat = 1;

  // Comparison module for LeaderboardEntry
  module LeaderboardEntry {
    public func compareByXP(a : LeaderboardEntry, b : LeaderboardEntry) : Order.Order {
      Nat.compare(b.xp, a.xp);
    };
  };

  // Helper: check if a username is an admin
  func isUsernameAdmin(username : Text) : Bool {
    switch (usernameRoles.get(username)) {
      case (?role) { role == "admin" };
      case (null) {
        switch (adminUsernames.get(username)) {
          case (?true) { true };
          case (_) { false };
        };
      };
    };
  };

  // Helper: check if a username is an operator
  func isUsernameOperator(username : Text) : Bool {
    switch (usernameRoles.get(username)) {
      case (?role) { role == "operator" };
      case (null) { false };
    };
  };

  // Helper: check if a principal is an operator
  func isOperator(p : Principal) : Bool {
    switch (operators.get(p)) {
      case (?true) { true };
      case (_) { false };
    };
  };

  func isAdminOrOperator(p : Principal) : Bool {
    AccessControl.isAdmin(accessControlState, p) or isOperator(p);
  };

  func xpToLevel(xp : Nat) : Nat {
    if (xp >= 600) { 4 } else if (xp >= 300) { 3 } else if (xp >= 100) { 2 } else { 1 };
  };

  func computeBadges(xp : Nat, streak : Nat) : [Text] {
    let badges = List.empty<Text>();
    if (xp >= 600) { badges.add("\F0\9F\8F\86 Champion") };
    if (xp >= 300 and xp < 600) { badges.add("\E2\AD\90 Expert") };
    if (xp >= 100 and xp < 300) { badges.add("\F0\9F\93\9A Scholar") };
    if (streak >= 7) { badges.add("\F0\9F\94\A5 Hot Streak") };
    if (streak >= 14) { badges.add("\E2\9A\A1 Unstoppable") };
    badges.toArray();
  };

  system func preupgrade() {
    userProfileEntries := userProfiles.entries().toArray();
    userProgressEntries := userProgress.entries().toArray();
    leaderboardEntries := leaderboard.entries().toArray();
    operatorEntries := operators.entries().toArray();
    siteSettingsEntries := siteSettingsStore.entries().toArray();
    topicEntries := topics.entries().toArray();
    userAccountEntries := userAccounts.entries().toArray();
    let adminList = List.empty<Text>();
    for ((k, _) in adminUsernames.entries()) {
      adminList.add(k);
    };
    adminUsernamesStable := adminList.toArray();
    usernameRolesStable := usernameRoles.entries().toArray();
    blogPostsStable := blogPosts.entries().toArray();
    nextBlogPostIdStable := nextBlogPostId;
    chatMessagesStable := chatMessages.entries().toArray();
    nextChatMessageIdStable := nextChatMessageId;
  };

  system func postupgrade() {
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
    for ((k, v) in userAccountEntries.values()) {
      userAccounts.add(k, v);
    };

    for (username in adminUsernamesStable.values()) {
      adminUsernames.add(username, true);
    };
    adminUsernames.add("Abhinav", true);

    for ((username, role) in usernameRolesStable.values()) {
      usernameRoles.add(username, role);
    };
    switch (usernameRoles.get("Abhinav")) {
      case (null) { usernameRoles.add("Abhinav", "admin") };
      case (?_) {};
    };

    for ((k, v) in blogPostsStable.values()) {
      blogPosts.add(k, v);
    };
    nextBlogPostId := nextBlogPostIdStable;

    for ((k, v) in chatMessagesStable.values()) {
      chatMessages.add(k, v);
    };
    nextChatMessageId := nextChatMessageIdStable;
    if (nextChatMessageId == 0) { nextChatMessageId := 1 };

    if (topics.size() == 0) {
      topics.add(1, { id = 1; board = "CBSE"; className = "10"; subject = "Science"; chapter = "Carbon Compounds"; microTopic = ""; questionCount = 10; difficulty = "Medium"; description = "Study Organic Chemistry basics and compounds." });
      topics.add(2, { id = 2; board = "CBSE"; className = "10"; subject = "Math"; chapter = "Quadratic Equations"; microTopic = ""; questionCount = 10; difficulty = "Hard"; description = "Practice solving quadratic equations." });
      topics.add(3, { id = 3; board = "CBSE"; className = "9"; subject = "History"; chapter = "French Revolution"; microTopic = ""; questionCount = 10; difficulty = "Medium"; description = "Explore the causes and effects of the French Revolution." });
    };
    userProfileEntries := [];
    userProgressEntries := [];
    leaderboardEntries := [];
    operatorEntries := [];
    siteSettingsEntries := [];
    topicEntries := [];
    userAccountEntries := [];
    adminUsernamesStable := [];
    usernameRolesStable := [];
    blogPostsStable := [];
    chatMessagesStable := [];
  };

  // ─── CHAT FUNCTIONS ───────────────────────────────────────────────────

  public shared ({ caller }) func sendChatMessage(
    roomId : Text,
    senderUsername : Text,
    senderName : Text,
    messageType : Text,
    content : Text,
  ) : async Nat {
    let id = nextChatMessageId;
    let msg : ChatMessage = {
      id;
      roomId;
      senderUsername;
      senderName;
      messageType;
      content;
      timestamp = Time.now();
    };
    chatMessages.add(id, msg);
    nextChatMessageId += 1;
    id;
  };

  public query func getChatMessages(roomId : Text, limit : Nat) : async [ChatMessage] {
    let roomMsgs = List.empty<ChatMessage>();
    for ((_, msg) in chatMessages.entries()) {
      if (msg.roomId == roomId) {
        roomMsgs.add(msg);
      };
    };
    // Sort by timestamp ascending
    let arr = roomMsgs.toArray();
    let sorted = arr.sort(func(a : ChatMessage, b : ChatMessage) : Order.Order {
      if (a.timestamp < b.timestamp) { #less }
      else if (a.timestamp > b.timestamp) { #greater }
      else { #equal };
    });
    // Take last `limit` messages
    let total = sorted.size();
    if (total <= limit) {
      sorted;
    } else {
      let start = total - limit;
      Array.tabulate<ChatMessage>(limit, func(i) { sorted[start + i] });
    };
  };

  public shared ({ caller }) func deleteChatMessage(id : Nat, callerUsername : Text) : async () {
    if (not isUsernameAdmin(callerUsername) and not isUsernameOperator(callerUsername)) {
      Runtime.trap("Unauthorized: Only admins or operators can delete messages");
    };
    ignore chatMessages.remove(id);
  };

  public query func getChatRooms() : async [Text] {
    let roomSet = Map.empty<Text, Bool>();
    for ((_, msg) in chatMessages.entries()) {
      roomSet.add(msg.roomId, true);
    };
    let rooms = List.empty<Text>();
    for ((room, _) in roomSet.entries()) {
      rooms.add(room);
    };
    rooms.toArray();
  };

  // ─── USERNAME-BASED ROLE SYSTEM ──────────────────────────────────────────────

  public query func getUserRole(username : Text) : async Text {
    switch (usernameRoles.get(username)) {
      case (?role) { role };
      case (null) {
        if (isUsernameAdmin(username)) { "admin" } else { "user" };
      };
    };
  };

  public shared ({ caller }) func setUsernameRole(callerUsername : Text, targetUsername : Text, role : Text) : async Bool {
    if (not isUsernameAdmin(callerUsername)) {
      Runtime.trap("Unauthorized: Only admins can set username roles");
    };
    if (role != "admin" and role != "operator" and role != "user") {
      Runtime.trap("Invalid role: must be 'admin', 'operator', or 'user'");
    };
    let callerRole = switch (usernameRoles.get(callerUsername)) {
      case (?r) { r };
      case (null) { if (isUsernameAdmin(callerUsername)) { "admin" } else { "user" } };
    };
    if (callerRole == "operator" and role == "admin") {
      Runtime.trap("Unauthorized: Operators cannot promote users to admin");
    };
    switch (usernameRoles.get(targetUsername)) {
      case (?existingRole) {
        if (existingRole == "admin" and role != "admin") {
          Runtime.trap("Cannot demote admin via setUsernameRole, use removeUsernameRole instead");
        };
      };
      case (null) {};
    };
    usernameRoles.add(targetUsername, role);
    true;
  };

  public shared ({ caller }) func removeUsernameRole(callerUsername : Text, targetUsername : Text) : async Bool {
    if (not isUsernameAdmin(callerUsername)) {
      Runtime.trap("Unauthorized: Only admins can remove username roles");
    };
    switch (usernameRoles.get(targetUsername)) {
      case (?existingRole) {
        if (existingRole == "admin") {
          Runtime.trap("Cannot remove admin role");
        };
      };
      case (null) {};
    };
    ignore usernameRoles.remove(targetUsername);
    true;
  };

  public query func getAllUsersWithRoles() : async [{ username : Text; fullName : Text; email : Text; role : Text; createdAt : Int }] {
    let entries = List.empty<{ username : Text; fullName : Text; email : Text; role : Text; createdAt : Int }>();
    for ((username, account) in userAccounts.entries()) {
      let role = switch (usernameRoles.get(username)) {
        case (?r) { r };
        case (null) { if (isUsernameAdmin(username)) { "admin" } else { "user" } };
      };
      entries.add({ username; fullName = account.fullName; email = account.email; role; createdAt = account.createdAt });
    };
    entries.toArray();
  };

  public query func getAdminStats() : async { totalUsers : Nat; totalAdmins : Nat; totalOperators : Nat; totalXP : Nat } {
    var adminCount = 0;
    var operatorCount = 0;
    var totalXP = 0;
    for ((_, role) in usernameRoles.entries()) {
      if (role == "admin") { adminCount += 1 } else if (role == "operator") { operatorCount += 1 };
    };
    for ((_, progress) in userProgress.entries()) { totalXP += progress.xp };
    { totalUsers = userAccounts.size(); totalAdmins = adminCount; totalOperators = operatorCount; totalXP };
  };

  public query func getUsernameRole(username : Text) : async Text {
    switch (usernameRoles.get(username)) {
      case (?role) { role };
      case (null) { if (isUsernameAdmin(username)) { "admin" } else { "user" } };
    };
  };

  public query func isStrictAdmin(username : Text) : async Bool {
    usernameRoles.get(username) == ?"admin";
  };

  public query func getAllUsersWithRolesPublic() : async [{ username : Text; fullName : Text; email : Text; createdAt : Int; role : Text }] {
    let entries = List.empty<{ username : Text; fullName : Text; email : Text; createdAt : Int; role : Text }>();
    for ((username, account) in userAccounts.entries()) {
      let role = switch (usernameRoles.get(username)) {
        case (?r) { r };
        case (null) { "user" };
      };
      entries.add({ username; fullName = account.fullName; email = account.email; createdAt = account.createdAt; role });
    };
    entries.toArray();
  };

  public query func getAllAdmins() : async [Text] {
    let admins = List.empty<Text>();
    for ((username, role) in usernameRoles.entries()) {
      if (role == "admin") { admins.add(username) };
    };
    admins.toArray();
  };

  public query func isOperatorRole(username : Text) : async Bool {
    switch (usernameRoles.get(username)) {
      case (?role) { role == "operator" };
      case (null) { false };
    };
  };

  public query func getRoleDetails(username : Text) : async ?{ username : Text; role : Text; createdAt : Int } {
    switch (usernameRoles.get(username)) {
      case (?role) { ?{ username; role; createdAt = Time.now() } };
      case (null) { null };
    };
  };

  public query func getRoleCount(role : Text) : async Nat {
    var count = 0;
    for ((_, r) in usernameRoles.entries()) { if (r == role) { count += 1 } };
    count;
  };

  public query func getTotalRoles() : async { admins : Nat; operators : Nat } {
    var adminCount = 0;
    var operatorCount = 0;
    for ((_, r) in usernameRoles.entries()) {
      if (r == "admin") { adminCount += 1 } else if (r == "operator") { operatorCount += 1 };
    };
    { admins = adminCount; operators = operatorCount };
  };

  public query func getRoleSummary() : async { totalUsers : Nat; totalAdmins : Nat; totalOperators : Nat } {
    var adminCount = 0;
    var operatorCount = 0;
    for ((_, r) in usernameRoles.entries()) {
      if (r == "admin") { adminCount += 1 } else if (r == "operator") { operatorCount += 1 };
    };
    { totalUsers = usernameRoles.size(); totalAdmins = adminCount; totalOperators = operatorCount };
  };

  public query func getAllRoles() : async [{ username : Text; role : Text }] {
    let roles = List.empty<{ username : Text; role : Text }>();
    for ((username, role) in usernameRoles.entries()) { roles.add({ username; role }) };
    roles.toArray();
  };

  public shared ({ caller }) func validateRoleAssignment(callerUsername : Text, targetRole : Text) : async Bool {
    if (not isUsernameAdmin(callerUsername)) { Runtime.trap("Unauthorized: Only admins can validate role assignments") };
    targetRole == "admin" or targetRole == "operator" or targetRole == "user";
  };

  public shared ({ caller }) func reassignUsernameRole(callerUsername : Text, targetUsername : Text, role : Text) : async Bool {
    if (not isUsernameAdmin(callerUsername)) { Runtime.trap("Unauthorized: Only admins can reassign roles") };
    if (role != "admin" and role != "operator" and role != "user") { Runtime.trap("Invalid role") };
    usernameRoles.add(targetUsername, role);
    true;
  };

  public query func hasRole(username : Text, role : Text) : async Bool {
    switch (usernameRoles.get(username)) {
      case (?r) { r == role };
      case (null) { false };
    };
  };

  // ─── USER ACCOUNT AUTHENTICATION ──────────────────────────────────────────────

  public query func checkUsernameAvailability(username : Text) : async Bool {
    not userAccounts.containsKey(username);
  };

  public shared ({ caller }) func signUp(username : Text, password : Text, fullName : Text, email : Text) : async { ok : Bool; message : Text } {
    let isAvailable = not userAccounts.containsKey(username);
    if (isAvailable) {
      let passwordHash = username # ":" # password;
      let currentTime = Time.now();
      let account : UserAccount = { username; passwordHash; fullName; email; createdAt = currentTime; lastLoginAt = currentTime };
      userAccounts.add(username, account);
      { ok = true; message = "Account created successfully" };
    } else {
      { ok = false; message = "Username is already taken" };
    };
  };

  public shared ({ caller }) func login(username : Text, password : Text) : async { ok : Bool; fullName : Text; email : Text; message : Text } {
    switch (userAccounts.get(username)) {
      case (null) { { ok = false; fullName = ""; email = ""; message = "Username not found" } };
      case (?account) {
        if (account.passwordHash == (username # ":" # password)) {
          let updatedAccount : UserAccount = { username = account.username; passwordHash = account.passwordHash; fullName = account.fullName; email = account.email; createdAt = account.createdAt; lastLoginAt = Time.now() };
          userAccounts.add(username, updatedAccount);
          { ok = true; fullName = account.fullName; email = account.email; message = "Login successful" };
        } else {
          { ok = false; fullName = ""; email = ""; message = "Invalid password" };
        };
      };
    };
  };

  public query func getUserByUsername(username : Text) : async ?{ fullName : Text; email : Text; createdAt : Int } {
    switch (userAccounts.get(username)) {
      case (null) { null };
      case (?account) { ?{ fullName = account.fullName; email = account.email; createdAt = account.createdAt } };
    };
  };

  public shared ({ caller }) func updateUserProfile(username : Text, newFullName : Text, newEmail : Text) : async { ok : Bool; message : Text } {
    switch (userAccounts.get(username)) {
      case (null) { { ok = false; message = "User not found" } };
      case (?account) {
        let updated : UserAccount = { username = account.username; passwordHash = account.passwordHash; fullName = newFullName; email = newEmail; createdAt = account.createdAt; lastLoginAt = account.lastLoginAt };
        userAccounts.add(username, updated);
        { ok = true; message = "Profile updated successfully" };
      };
    };
  };

  // ─── EXISTING FUNCTIONS ────────────────────────────────────────────

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
      ranked.add({ rank; username = entry.username; xp = entry.xp; level = entry.level; badges = entry.badges; streak = entry.streak });
      rank += 1;
    };
    let take20 = List.empty<LeaderboardEntry>();
    var count = 0;
    for (entry in ranked.toArray().values()) {
      if (count < 20) { take20.add(entry); count += 1 };
    };
    take20.toArray();
  };

  public query ({ caller }) func getSiteSettings() : async ?SiteSettings {
    siteSettingsStore.get("main");
  };

  public shared ({ caller }) func updateSiteSettings(announcement : Text, announcementEnabled : Bool, featuredMessage : Text) : async SiteSettings {
    if (not isAdminOrOperator(caller)) { Runtime.trap("Unauthorized: Only admins or operators can update site settings") };
    let settings : SiteSettings = { announcement; announcementEnabled; featuredMessage; lastUpdated = Time.now(); updatedBy = caller.toText() };
    siteSettingsStore.add("main", settings);
    settings;
  };

  public query ({ caller }) func getCallerRole() : async Text {
    if (AccessControl.isAdmin(accessControlState, caller)) { "admin" }
    else if (isOperator(caller)) { "operator" }
    else { "user" };
  };

  public query ({ caller }) func getAllUsersWithPrincipalRoles() : async [UserWithRole] {
    let result = List.empty<UserWithRole>();
    for ((p, profile) in userProfiles.entries()) {
      let role = if (AccessControl.isAdmin(accessControlState, p)) { "admin" } else if (isOperator(p)) { "operator" } else { "user" };
      result.add({ principal = profile.principal; displayName = profile.displayName; studentClass = profile.studentClass; createdAt = profile.createdAt; role });
    };
    result.toArray();
  };

  public query ({ caller }) func getAllOperators() : async [Text] {
    let result = List.empty<Text>();
    for ((p, _) in operators.entries()) { result.add(p.toText()) };
    result.toArray();
  };

  public shared ({ caller }) func deleteUserProfile(user : Principal) : async () {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only delete your own profile or must be admin");
    };
    ignore userProfiles.remove(user);
  };

  public shared ({ caller }) func markFlashcardMastered(flashcardId : Nat) : async () {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) { Runtime.trap("Unauthorized") };
    let userId = caller.toText();
    switch (userProgress.get(userId)) {
      case (?progress) {
        let masteredList = List.fromArray<Nat>(progress.masteredFlashcards);
        masteredList.add(flashcardId);
        let newProgress : UserProgress = { userId = progress.userId; topicId = progress.topicId; xp = progress.xp; level = progress.level; streak = progress.streak; lastQuizScore = progress.lastQuizScore; masteredFlashcards = masteredList.toArray() };
        userProgress.add(userId, newProgress);
      };
      case (null) { Runtime.trap("User not found in progress records.") };
    };
  };

  public shared ({ caller }) func addBlogXP(xpAmount : Nat) : async Nat {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) { Runtime.trap("Unauthorized") };
    let userId = caller.toText();
    let updatedXP = switch (userProgress.get(userId)) {
      case (null) {
        let newProgress : UserProgress = { userId; topicId = 0; xp = xpAmount; level = xpToLevel(xpAmount); streak = 0; lastQuizScore = 0; masteredFlashcards = [] };
        userProgress.add(userId, newProgress);
        xpAmount;
      };
      case (?progress) {
        let newXP = progress.xp + xpAmount;
        let newProgress : UserProgress = { userId = progress.userId; topicId = progress.topicId; xp = newXP; level = xpToLevel(newXP); streak = progress.streak; lastQuizScore = progress.lastQuizScore; masteredFlashcards = progress.masteredFlashcards };
        userProgress.add(userId, newProgress);
        newXP;
      };
    };
    let existingStreak = switch (leaderboard.get(userId)) {
      case (?entry) { entry.streak };
      case (null) { 0 };
    };
    leaderboard.add(userId, { rank = 0; username = userId; xp = updatedXP; level = xpToLevel(updatedXP); badges = computeBadges(updatedXP, existingStreak); streak = existingStreak });
    updatedXP;
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) { Runtime.trap("Unauthorized") };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(displayName : Text, studentClass : Text) : async UserProfile {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) { Runtime.trap("Unauthorized") };
    let currentTime = Time.now();
    let profile : UserProfile = { principal = caller.toText(); displayName; studentClass; createdAt = currentTime };
    userProfiles.add(caller, profile);
    profile;
  };

  // ─── BLOGPOST METHODS ──────────────────────────────────────────────

  public query func getAllBlogPosts() : async [BlogPost] {
    let posts = List.empty<BlogPost>();
    for ((_, post) in blogPosts.entries()) { if (post.published) { posts.add(post) } };
    posts.toArray();
  };

  public query func getAllBlogPostsPublic() : async [BlogPost] {
    let posts = List.empty<BlogPost>();
    for ((_, post) in blogPosts.entries()) { if (post.published) { posts.add(post) } };
    posts.toArray();
  };

  public query func getAllBlogPostsByAuthor(authorUsername : Text) : async [BlogPost] {
    let posts = List.empty<BlogPost>();
    for ((_, post) in blogPosts.entries()) { if (post.authorUsername == authorUsername and post.published) { posts.add(post) } };
    posts.toArray();
  };

  public query func getBlogPostById(id : Nat) : async ?BlogPost {
    switch (blogPosts.get(id)) {
      case (?post) { if (post.published) { ?post } else { null } };
      case (null) { null };
    };
  };

  public query func getBlogPostImageById(id : Nat) : async ?Text {
    switch (blogPosts.get(id)) {
      case (?post) { if (post.published) { ?post.imageUrl } else { null } };
      case (null) { null };
    };
  };

  public shared ({ caller }) func createBlogPost(title : Text, description : Text, content : Text, authorName : Text, authorUsername : Text, imageUrl : Text) : async Nat {
    if (not isUsernameAdmin(authorUsername) and not isUsernameOperator(authorUsername)) { Runtime.trap("Unauthorized") };
    let id = nextBlogPostId;
    let post : BlogPost = { id; title; description; content; authorName; authorUsername; createdAt = Time.now(); published = false; imageUrl };
    blogPosts.add(id, post);
    nextBlogPostId += 1;
    id;
  };

  public shared ({ caller }) func updateBlogPost(id : Nat, title : Text, description : Text, content : Text, imageUrl : Text, published : Bool, editorUsername : Text) : async () {
    if (not isUsernameAdmin(editorUsername) and not isUsernameOperator(editorUsername)) { Runtime.trap("Unauthorized") };
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?post) {
        let updatedPost : BlogPost = { id = post.id; title; description; content; authorName = post.authorName; authorUsername = post.authorUsername; createdAt = post.createdAt; published; imageUrl };
        blogPosts.add(id, updatedPost);
      };
    };
  };

  public shared ({ caller }) func deleteBlogPost(id : Nat, callerUsername : Text) : async () {
    if (not isUsernameAdmin(callerUsername) and not isUsernameOperator(callerUsername)) { Runtime.trap("Unauthorized") };
    if (not blogPosts.containsKey(id)) { Runtime.trap("Blog post not found") };
    ignore blogPosts.remove(id);
  };

  public shared ({ caller }) func publishBlogPost(id : Nat, callerUsername : Text) : async () {
    if (not isUsernameAdmin(callerUsername) and not isUsernameOperator(callerUsername)) { Runtime.trap("Unauthorized") };
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?post) {
        let updatedPost : BlogPost = { id = post.id; title = post.title; description = post.description; content = post.content; authorName = post.authorName; authorUsername = post.authorUsername; createdAt = post.createdAt; published = true; imageUrl = post.imageUrl };
        blogPosts.add(id, updatedPost);
      };
    };
  };

  public shared ({ caller }) func unpublishBlogPost(id : Nat, callerUsername : Text) : async () {
    if (not isUsernameAdmin(callerUsername) and not isUsernameOperator(callerUsername)) { Runtime.trap("Unauthorized") };
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post not found") };
      case (?post) {
        let updatedPost : BlogPost = { id = post.id; title = post.title; description = post.description; content = post.content; authorName = post.authorName; authorUsername = post.authorUsername; createdAt = post.createdAt; published = false; imageUrl = post.imageUrl };
        blogPosts.add(id, updatedPost);
      };
    };
  };

  public query func searchBlogPosts(searchQuery : Text) : async [BlogPost] {
    let queryLower = searchQuery.toLower();
    let posts = List.empty<BlogPost>();
    for ((_, post) in blogPosts.entries()) {
      if (post.published and (post.title.toLower().contains(#text queryLower) or post.description.toLower().contains(#text queryLower) or post.content.toLower().contains(#text queryLower))) {
        posts.add(post);
      };
    };
    posts.toArray();
  };

  public query func getAllBlogPostsPublicAdmin() : async [BlogPost] {
    let posts = List.empty<BlogPost>();
    for ((_, post) in blogPosts.entries()) { if (post.published) { posts.add(post) } };
    posts.toArray();
  };

  public query ({ caller }) func getAllBlogPostsAdmin(callerUsername : Text) : async [BlogPost] {
    if (not isUsernameAdmin(callerUsername) and not isUsernameOperator(callerUsername)) { Runtime.trap("Unauthorized") };
    blogPosts.values().toArray();
  };
};
