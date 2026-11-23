type NullableKeys<T> = {
    [K in keyof T]: null extends T[K] ? K : undefined extends T[K] ? K : never;
}[keyof T];
