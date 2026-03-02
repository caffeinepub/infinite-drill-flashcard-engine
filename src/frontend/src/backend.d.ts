import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
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
export interface LeaderboardEntry {
    xp: bigint;
    streak: bigint;
    username: string;
    badges: Array<string>;
    rank: bigint;
    level: bigint;
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
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllTopics(): Promise<Array<Topic>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getLeaderboard(): Promise<Array<LeaderboardEntry>>;
    getTopicById(id: bigint): Promise<Topic | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    markFlashcardMastered(userId: string, flashcardId: bigint): Promise<void>;
    saveCallerUserProfile(displayName: string, studentClass: string): Promise<UserProfile>;
    saveUserProfile(displayName: string, studentClass: string): Promise<UserProfile>;
    simulateAIContentGeneration(topicId: bigint, rawText: string): Promise<GeneratedContent>;
    submitQuizResult(userId: string, topicId: bigint, score: bigint): Promise<[bigint, bigint]>;
}
