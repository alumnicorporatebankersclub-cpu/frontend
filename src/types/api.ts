/** Error body returned by the NestJS backend's global exception filter. */
export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
  timestamp: string;
  path: string;
}

/** Normalised error thrown by the axios response interceptor. */
export class ApiError extends Error {
  readonly status: number | null;
  /** Individual validation messages when the API returned several. */
  readonly details: string[];

  constructor(message: string, status: number | null, details: string[] = []) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

/** Generic wrapper for paginated list endpoints. */
export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
