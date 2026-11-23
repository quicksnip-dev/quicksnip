export type Debounced<A extends unknown[]> = ((...args: A) => void) & {
  /** Cancels a pending call. */
  cancel: () => void;
  /** Runs a pending call immediately. */
  flush: () => void;
};

/**
 * Delays calling `fn` until `wait` ms have passed since the last call.
 * Useful for search inputs, resize handlers and autosave.
 */
export function debounce<A extends unknown[]>(fn: (...args: A) => void, wait: number): Debounced<A> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: A | undefined;

  const run = () => {
    timer = undefined;
    if (pending) {
      const args = pending;
      pending = undefined;
      fn(...args);
    }
  };

  const debounced = (...args: A) => {
    pending = args;
    clearTimeout(timer);
    timer = setTimeout(run, wait);
  };

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  debounced.flush = () => {
    clearTimeout(timer);
    run();
  };

  return debounced;
}
