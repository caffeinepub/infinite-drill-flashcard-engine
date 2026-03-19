import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeaderboardEntry {
    xp: bigint;
    streak: bigint;
    username: string;
    badges: Array<string>;
    rank: bigint;
    level: bigint;
}
export interface SiteSettings {
    lastUpdated: bigint;
    announcement: string;
    updatedBy: string;
    announcementEnabled: boolean;
    featuredMessage: string;
}
export interface UserWithRole {
    principal: string;
    displayName: string;
    createdAt: bigint;
    role: string;
    studentClass: string;
}
export interface Topic {
    id: bigint;
    microTopic: string;
    subject: string;
    difficulty: string;
    description: string;
    board: string;
    chapter: string;
    className: string;
    questionCount: bigint;
}
export interface GeneratedContent {
    generatedAt: bigint;
    mcqCount: bigint;
    flashcardCount: bigint;
    cheatsheetCount: bigint;
    topicId: bigint;
}
export interface UserProfile {
    principal: string;
    displayName: string;
    createdAt: bigint;
    studentClass: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addBlogXP(xpAmount: bigint): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    assignOperatorRole(user: Principal): Promise<void>;
    checkUsernameAvailability(username: string): Promise<boolean>;
    deleteUserProfile(user: Principal): Promise<void>;
    dismissOperator(user: Principal): Promise<void>;
    getAllOperators(): Promise<Array<string>>;
    getAllTopics(): Promise<Array<Topic>>;
    getAllUsersWithRoles(): Promise<Array<UserWithRole>>;
    getCallerRole(): Promise<string>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getLeaderboard(): Promise<Array<LeaderboardEntry>>;
    getSiteSettings(): Promise<SiteSettings | null>;
    getTopicById(id: bigint): Promise<Topic | null>;
    getUserByUsername(username: string): Promise<{
        createdAt: bigint;
        fullName: string;
        email: string;
    } | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isCallerOperator(): Promise<boolean>;
    login(username: string, password: string): Promise<{
        ok: boolean;
        fullName: string;
        email: string;
        message: string;
    }>;
    markFlashcardMastered(flashcardId: bigint): Promise<void>;
    saveCallerUserProfile(displayName: string, studentClass: string): Promise<UserProfile>;
    saveUserProfile(displayName: string, studentClass: string): Promise<UserProfile>;
    signUp(username: string, password: string, fullName: string, email: string): Promise<{
        ok: boolean;
        message: string;
    }>;
    simulateAIContentGeneration(topicId: bigint, rawText: string): Promise<GeneratedContent>;
    submitQuizResult(topicId: bigint, score: bigint): Promise<[bigint, bigint]>;
    updateSiteSettings(announcement: string, announcementEnabled: boolean, featuredMessage: string): Promise<SiteSettings>;
}
