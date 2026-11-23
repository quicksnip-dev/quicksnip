/**
 * Calls `fn` at most once every `wait` ms. The first call runs immediately and
 * the last call during the wait window runs when it ends, so no update is lost.
 * Useful for scroll, pointer-move and resize handlers.
 */
export function throttle<A extends unknown[]>(fn: (...args: A) => void, wait: number) {
  let last = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: A | undefined;

  const invoke = (args: A) => {
    last = Date.now();
    fn(...args);
  };

  const throttled = (...args: A) => {
    const remaining = wait - (Date.now() - last);
    if (remaining <= 0) {
      clearTimeout(timer);
      timer = undefined;
      invoke(args);
    } else {
      pending = args;
      timer ??= setTimeout(() => {
        timer = undefined;
        if (pending) invoke(pending);
        pending = undefined;
      }, remaining);
    }
  };

  throttled.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  return throttled;
}
