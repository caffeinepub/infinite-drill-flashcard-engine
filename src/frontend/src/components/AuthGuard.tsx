// AuthGuard is no longer needed — auth is handled via router beforeLoad.
// This file is kept to avoid breaking any stray imports.
import type { ReactNode } from "react";

export function AuthGuard({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
