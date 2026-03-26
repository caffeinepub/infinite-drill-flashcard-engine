import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    id: bigint;
    title: string;
    authorUsername: string;
    content: string;
    published: boolean;
    createdAt: bigint;
    authorName: string;
    description: string;
    imageUrl: string;
}
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
    checkUsernameAvailability(username: string): Promise<boolean>;
    createBlogPost(title: string, description: string, content: string, authorName: string, authorUsername: string, imageUrl: string): Promise<bigint>;
    deleteBlogPost(id: bigint, callerUsername: string): Promise<void>;
    deleteUserProfile(user: Principal): Promise<void>;
    getAdminStats(): Promise<{
        totalXP: bigint;
        totalAdmins: bigint;
        totalOperators: bigint;
        totalUsers: bigint;
    }>;
    getAllAdmins(): Promise<Array<string>>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllBlogPostsAdmin(callerUsername: string): Promise<Array<BlogPost>>;
    getAllBlogPostsByAuthor(authorUsername: string): Promise<Array<BlogPost>>;
    getAllBlogPostsPublic(): Promise<Array<BlogPost>>;
    getAllBlogPostsPublicAdmin(): Promise<Array<BlogPost>>;
    getAllOperators(): Promise<Array<string>>;
    getAllRoles(): Promise<Array<{
        username: string;
        role: string;
    }>>;
    getAllTopics(): Promise<Array<Topic>>;
    getAllUsersWithPrincipalRoles(): Promise<Array<UserWithRole>>;
    getAllUsersWithRoles(): Promise<Array<{
        username: string;
        createdAt: bigint;
        role: string;
        fullName: string;
        email: string;
    }>>;
    getAllUsersWithRolesPublic(): Promise<Array<{
        username: string;
        createdAt: bigint;
        role: string;
        fullName: string;
        email: string;
    }>>;
    getBlogPostById(id: bigint): Promise<BlogPost | null>;
    getBlogPostImageById(id: bigint): Promise<string | null>;
    getCallerRole(): Promise<string>;
    getCallerUserRole(): Promise<UserRole>;
    getLeaderboard(): Promise<Array<LeaderboardEntry>>;
    getRoleCount(role: string): Promise<bigint>;
    getRoleDetails(username: string): Promise<{
        username: string;
        createdAt: bigint;
        role: string;
    } | null>;
    getRoleSummary(): Promise<{
        totalAdmins: bigint;
        totalOperators: bigint;
        totalUsers: bigint;
    }>;
    getSiteSettings(): Promise<SiteSettings | null>;
    getTopicById(id: bigint): Promise<Topic | null>;
    getTotalRoles(): Promise<{
        operators: bigint;
        admins: bigint;
    }>;
    getUserByUsername(username: string): Promise<{
        createdAt: bigint;
        fullName: string;
        email: string;
    } | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getUserRole(username: string): Promise<string>;
    getUsernameRole(username: string): Promise<string>;
    hasRole(username: string, role: string): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    isOperatorRole(username: string): Promise<boolean>;
    isStrictAdmin(username: string): Promise<boolean>;
    login(username: string, password: string): Promise<{
        ok: boolean;
        fullName: string;
        email: string;
        message: string;
    }>;
    markFlashcardMastered(flashcardId: bigint): Promise<void>;
    publishBlogPost(id: bigint, callerUsername: string): Promise<void>;
    reassignUsernameRole(callerUsername: string, targetUsername: string, role: string): Promise<boolean>;
    removeUsernameRole(callerUsername: string, targetUsername: string): Promise<boolean>;
    saveCallerUserProfile(displayName: string, studentClass: string): Promise<UserProfile>;
    searchBlogPosts(searchQuery: string): Promise<Array<BlogPost>>;
    setUsernameRole(callerUsername: string, targetUsername: string, role: string): Promise<boolean>;
    signUp(username: string, password: string, fullName: string, email: string): Promise<{
        ok: boolean;
        message: string;
    }>;
    unpublishBlogPost(id: bigint, callerUsername: string): Promise<void>;
    updateBlogPost(id: bigint, title: string, description: string, content: string, imageUrl: string, published: boolean, editorUsername: string): Promise<void>;
    updateSiteSettings(announcement: string, announcementEnabled: boolean, featuredMessage: string): Promise<SiteSettings>;
    updateUserProfile(username: string, newFullName: string, newEmail: string): Promise<{
        ok: boolean;
        message: string;
    }>;
    validateRoleAssignment(callerUsername: string, targetRole: string): Promise<boolean>;
}
