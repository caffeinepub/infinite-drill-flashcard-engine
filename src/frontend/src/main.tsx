import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InternetIdentityProvider } from "./hooks/useInternetIdentity";
import "../index.css";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

declare global {
  interface BigInt {
    toJSON(): string;
  }
}

// Optimized QueryClient: reduce unnecessary refetch churn that wastes main-thread time.
// staleTime 5 min: avoid re-fetching data that's still fresh (critical for backend round-trips).
// gcTime 10 min: keep cached data in memory to avoid redundant re-renders on navigation.
// retry 1: don't hammer the network on failure (reduces JS execution on errors).
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes — fresh data window
      gcTime: 1000 * 60 * 10, // 10 minutes — garbage collection window
      retry: 1, // only retry once to reduce blocked JS time
      refetchOnWindowFocus: false, // don't refetch on tab switch (reduces repaints)
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <InternetIdentityProvider>
      <App />
    </InternetIdentityProvider>
  </QueryClientProvider>,
);
