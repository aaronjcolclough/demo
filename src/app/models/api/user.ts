import { IAddress, ICompany, IUser } from "../interfaces";
import { Entity } from "./base";

export class User extends Entity implements IUser {
    private _name: string;
    private _username: string;
    private _email: string;
    private _address: IAddress;
    private _phone: string;
    private _website: string;
    private _company: ICompany;

    constructor(user: IUser) {
        super(user?.id ?? 0);
        this._name = user.name;
        this._username = user.username;
        this._email = user.email;
        this._address = user.address;
        this._phone = user.phone;
        this._website = user.website;
        this._company = user.company;
    }

    public get name() { return this._name; }
    public get username() { return this._username; }
    public get email() { return this._email; }
    public get address() { return this._address; }
    public get phone() { return this._phone; }
    public get website() { return this._website; }
    public get company() { return this._company; }
}
