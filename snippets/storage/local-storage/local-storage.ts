/**
 * Typed, SSR-safe wrapper around localStorage with JSON serialization.
 * Never throws: storage being unavailable (SSR, private mode, quota) falls back gracefully.
 */
export const storage = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = globalThis.localStorage?.getItem(key);
      return raw === null || raw === undefined ? fallback : (JSON.parse(raw) as T);
    } catch {
      return fallback;
    }
  },

  set<T>(key: string, value: T): boolean {
    try {
      globalThis.localStorage?.setItem(key, JSON.stringify(value));
      return globalThis.localStorage !== undefined;
    } catch {
      return false;
    }
  },

  has(key: string): boolean {
    try {
      return globalThis.localStorage?.getItem(key) != null;
    } catch {
      return false;
    }
  },

  remove(key: string): void {
    try {
      globalThis.localStorage?.removeItem(key);
    } catch {
      // ignore
    }
  },
};
