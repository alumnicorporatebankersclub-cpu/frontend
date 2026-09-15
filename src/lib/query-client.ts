import { QueryClient } from "@tanstack/react-query";

/**
 * Factory for a QueryClient. Called inside `useState` in the Providers component
 * so each browser session (and each SSR request) gets its own cache.
 */
export function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Avoid immediate refetch on the client after SSR hydration.
        staleTime: 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}
