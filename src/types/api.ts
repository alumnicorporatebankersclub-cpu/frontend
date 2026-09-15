/** Shape of an error payload returned by the backend. */
export interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

/** Normalised error thrown by the axios response interceptor. */
export class ApiError extends Error {
  readonly status: number | null;
  readonly errors: Record<string, string[]> | undefined;

  constructor(message: string, status: number | null, errors?: Record<string, string[]>) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

/** Generic wrapper for paginated list endpoints. */
export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
