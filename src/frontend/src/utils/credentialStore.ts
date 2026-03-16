const STORAGE_KEY = "ncert_creds";

interface CredEntry {
  hash: string;
  email?: string;
  fullName?: string;
}

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function loadStore(): Record<string, CredEntry> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // migrate old format (string values) to new format
    const result: Record<string, CredEntry> = {};
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === "string") {
        result[k] = { hash: v };
      } else {
        result[k] = v as CredEntry;
      }
    }
    return result;
  } catch {
    return {};
  }
}

function saveStore(store: Record<string, CredEntry>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export async function saveCredentials(
  username: string,
  password: string,
  email?: string,
  fullName?: string,
): Promise<void> {
  const hash = await hashPassword(password);
  const store = loadStore();
  store[username.trim().toLowerCase()] = { hash, email, fullName };
  saveStore(store);
}

export async function verifyCredentials(
  username: string,
  password: string,
): Promise<boolean> {
  const store = loadStore();
  const entry = store[username.trim().toLowerCase()];
  if (!entry) return false;
  const inputHash = await hashPassword(password);
  return entry.hash === inputHash;
}

export function hasCredentials(username: string): boolean {
  const store = loadStore();
  return username.trim().toLowerCase() in store;
}

export function isUsernameTaken(username: string): boolean {
  const store = loadStore();
  return username.trim().toLowerCase() in store;
}

export function getCredentialEmail(username: string): string | undefined {
  const store = loadStore();
  return store[username.trim().toLowerCase()]?.email;
}
