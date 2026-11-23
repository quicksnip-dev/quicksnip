type Exclusive<T, U = T> = T | U extends Record<string, unknown>
  ?
      | ({ [P in Exclude<keyof T, keyof U>]?: never } & U)
      | ({ [P in Exclude<keyof U, keyof T>]?: never } & T)
  : T | U;
