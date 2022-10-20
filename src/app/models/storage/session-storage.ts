import { IStorage } from './istorage';

export class SessionStorage<T> implements IStorage<T> {
    private key: string;

    hasState = false;

    constructor(
        key: string
    ) {
        this.key = key;
        this.get();
    }

    get = (): T | null => {
        const value = JSON.parse(sessionStorage.getItem(this.key)) as T;
        this.hasState = !!value;
        return value;
    }

    set = (value: T) => {
        if (value) {
            sessionStorage.setItem(this.key, JSON.stringify(value));
            this.hasState = true;
        } else
            this.clear();
    }

    clear = () => {
        sessionStorage.removeItem(this.key);
        this.hasState = false;
    }
}
