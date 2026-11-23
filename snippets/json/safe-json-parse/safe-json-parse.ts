export type ParseResult<T> = { ok: true; value: T } | { ok: false; error: Error };

/** Parses JSON without throwing. Returns a result object you can branch on. */
export function safeJsonParse<T = unknown>(text: string): ParseResult<T> {
  try {
    return { ok: true, value: JSON.parse(text) as T };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error : new Error(String(error)) };
  }
}
