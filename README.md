# Alumni Club – Frontend

Next.js 16 (App Router, `src/`, TypeScript) · Tailwind CSS v4 · TanStack Query · Axios · React Hook Form + Zod · react-hot-toast

## Getting started

```bash
cp .env.local.example .env.local   # then set NEXT_PUBLIC_API_URL
npm install
npm run dev                        # http://localhost:3000
```

| Script          | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Dev server (Turbopack)                |
| `npm run build` | Production build + type check         |
| `npm run start` | Serve the production build            |
| `npm run lint`  | ESLint (`no-explicit-any` is an error) |

## Structure

```
src/
  app/
    layout.tsx        Server root layout; mounts <Providers>
    page.tsx          Server component page composing client components
    providers.tsx     "use client" – QueryClientProvider + Toaster + Devtools
    globals.css       Tailwind v4 entry (@import "tailwindcss" + @theme)
  components/
    ui/               Reusable primitives (Button, Input, Field)
    users/            Feature components (UserForm, UserList)
  hooks/              One file per resource: useUsers(), useCreateUser()
  lib/
    axios.ts          Axios instance + auth/401 interceptors
    query-client.ts   makeQueryClient() factory (defaults live here)
    api/              Plain request functions, one file per resource
    utils.ts          cn() class-name helper
  types/              Shared types (User, ApiError, ...)
```

## Conventions

- **Server vs client**: pages and layouts are Server Components. Add `"use client"` only to leaves that need hooks, browser APIs, or context (`providers.tsx`, feature components, hooks).
- **Data flow**: `lib/api/*` → typed request functions · `hooks/*` → `useQuery`/`useMutation` wrappers with a query-key factory (`userKeys`) · components call hooks only.
- **QueryClient** is created in `useState` inside `Providers`, so each request/session gets its own cache — never a module-level singleton.
- **Errors**: the axios response interceptor rejects with `ApiError` (`message`, `status`, field `errors`). A `401` clears the stored token and hard-redirects to `/login?next=…`.
- **Auth token**: read/written through `authToken` in `lib/axios.ts` (localStorage, browser-only guard).
- **Forms**: `react-hook-form` + `zodResolver`; infer form types from the schema with `z.infer` and pass them to the mutation hook.
- **Toasts**: fire from the mutation hook (`onSuccess`/`onError`), not from components.

## Environment

| Variable              | Description                              |
| --------------------- | ---------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API, no trailing slash |
