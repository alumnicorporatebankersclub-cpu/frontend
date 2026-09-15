import { UserForm } from "@/components/users/user-form";
import { UserList } from "@/components/users/user-list";

// Server Component: static shell; the interactive pieces are client components.
export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-4 py-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Create a user</h1>
        <UserForm />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold tracking-tight">Users</h2>
        <UserList />
      </section>
    </main>
  );
}
