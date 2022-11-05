import { IEntity } from "../../interfaces";

export abstract class Entity implements IEntity {
    private _id: number;

    constructor(id: number) {
        this._id = id;
    }

    public get id() { return this._id; }
}
