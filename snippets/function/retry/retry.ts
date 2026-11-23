export type RetryOptions = {
  /** Total attempts, including the first one. Default: 3 */
  attempts?: number;
  /** Delay before the first retry in ms. Doubles on each retry. Default: 200 */
  delay?: number;
  /** Upper bound for a single delay in ms. Default: 10_000 */
  maxDelay?: number;
  /** Return false to stop retrying for a given error (e.g. a 4xx response). */
  shouldRetry?: (error: unknown, attempt: number) => boolean;
  signal?: AbortSignal;
};

/**
 * Retries an async function with exponential backoff and jitter.
 * Useful for flaky network calls, rate-limited APIs and cold starts.
 */
export async function retry<T>(
  fn: (attempt: number) => Promise<T>,
  { attempts = 3, delay = 200, maxDelay = 10_000, shouldRetry = () => true, signal }: RetryOptions = {},
): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    signal?.throwIfAborted();
    try {
      return await fn(attempt);
    } catch (error) {
      if (attempt >= attempts || !shouldRetry(error, attempt)) throw error;
      const backoff = Math.min(maxDelay, delay * 2 ** (attempt - 1));
      const jittered = backoff / 2 + Math.random() * (backoff / 2);
      await new Promise((resolve) => setTimeout(resolve, jittered));
    }
  }
}
