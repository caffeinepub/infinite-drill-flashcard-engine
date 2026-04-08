// Shared frontend types — mirrors backend data shapes.
// These match the actual field names used throughout the codebase.

export interface UserProfile {
  username?: string;
  displayName: string;
  email?: string;
  studentClass: string;
  country?: string;
  principal: string;
  xp?: bigint;
  streak?: bigint;
  level?: bigint;
  badges?: string[];
  lastLogin?: bigint;
  createdAt: bigint;
}

export interface BlogPost {
  id: bigint;
  title: string;
  slug?: string;
  description?: string;
  excerpt?: string;
  content: string;
  author?: string;
  authorName?: string;
  authorUsername?: string;
  published?: boolean;
  isPublished?: boolean;
  publishedAt?: bigint;
  updatedAt?: bigint;
  createdAt?: bigint;
  tags?: string[];
  imageUrl?: string;
  subject?: string;
  className?: string;
}

export interface SiteSettings {
  announcement: string;
  announcementEnabled: boolean;
  featuredMessage: string;
  maintenanceMode?: boolean;
}
