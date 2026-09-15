"use client";

import { Button } from "@/components/ui";
import { useUsers } from "@/hooks/use-users";

export function UserList() {
  const { data, isPending, isError, error, refetch, isFetching } = useUsers();

  if (isPending) {
    return (
      <ul className="flex flex-col gap-2" aria-busy>
        {Array.from({ length: 3 }, (_, i) => (
          <li key={i} className="h-14 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800" />
        ))}
      </ul>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
        <p>Could not load users: {error.message}</p>
        <Button variant="secondary" onClick={() => refetch()} isLoading={isFetching}>
          Retry
        </Button>
      </div>
    );
  }

  if (data.length === 0) {
    return <p className="text-sm text-zinc-500">No users yet. Create the first one above.</p>;
  }

  return (
    <ul className="divide-y divide-zinc-200 rounded-md border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {data.map((user) => (
        <li key={user.id} className="flex items-center justify-between gap-4 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate font-medium">{user.name}</p>
            <p className="truncate text-sm text-zinc-500">{user.email}</p>
          </div>
          <time dateTime={user.createdAt} className="shrink-0 text-xs text-zinc-400">
            {new Date(user.createdAt).toLocaleDateString()}
          </time>
        </li>
      ))}
    </ul>
  );
}
