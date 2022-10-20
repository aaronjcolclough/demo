import { IStorage } from './istorage';

export class LocalStorage<T> implements IStorage<T> {
    private key: string;

    hasState = false;    

    constructor(
        key: string
    ) {
        this.key = key;
        this.get();
    }

    get = (): T | null => {
        const value = JSON.parse(localStorage.getItem(this.key)) as T;
        this.hasState = !!value;
        return value;
    }

    set = (value: T) => {
        if (value) {
            localStorage.setItem(this.key, JSON.stringify(value));
            this.hasState = true;
        } else
            this.clear();
    }

    clear = () => {
        localStorage.removeItem(this.key);
        this.hasState = false;
    }
}
