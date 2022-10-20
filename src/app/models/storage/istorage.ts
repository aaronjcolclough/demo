export interface IStorage<T> {
    hasState: boolean;

    get: () => T | null;
    set: (value: T) => void;
    clear: () => void;
}
