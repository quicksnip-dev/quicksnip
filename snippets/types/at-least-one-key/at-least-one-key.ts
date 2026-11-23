type AtLeastOne<T> = {
    [K in keyof T]: Pick<T, K> & Partial<Omit<T, K>>;
}[keyof T];
