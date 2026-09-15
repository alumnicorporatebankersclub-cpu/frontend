import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";
import { ApiError, type ApiErrorResponse } from "@/types/api";

const AUTH_TOKEN_KEY = "auth_token";
const LOGIN_PATH = "/login";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined. Copy .env.local.example to .env.local.");
}

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 15_000,
});

/** Token helpers – localStorage is only available in the browser. */
export const authToken = {
  get(): string | null {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(AUTH_TOKEN_KEY);
  },
  set(token: string): void {
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
  },
  clear(): void {
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
  },
};

/**
 * Full-page redirect to the login screen. Deliberately not a router push:
 * a hard navigation discards all in-memory state (query cache, forms) tied to
 * the expired session. `replace` keeps the dead page out of history.
 */
function redirectToLogin(): void {
  const { pathname, search, origin } = window.location;
  if (pathname === LOGIN_PATH) return;

  const target = new URL(LOGIN_PATH, origin);
  target.searchParams.set("next", `${pathname}${search}`);
  window.location.replace(target);
}

// Attach the bearer token to every outgoing request when one is present.
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = authToken.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Normalise errors and handle expired sessions.
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    const status = error.response?.status ?? null;

    if (status === 401 && typeof window !== "undefined") {
      authToken.clear();
      redirectToLogin();
    }

    const message =
      error.response?.data?.message ??
      (error.code === "ECONNABORTED" ? "Request timed out" : error.message) ??
      "Something went wrong";

    return Promise.reject(new ApiError(message, status, error.response?.data?.errors));
  },
);
