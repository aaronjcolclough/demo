import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "../../interfaces";
import { GenerateAddressForm } from "./address-form";
import { GenerateCompanyForm } from "./company-form";
import { GenerateEntityForm } from "./entity-form";

export const GenerateUserForm = (user: IUser, fb: FormBuilder): FormGroup =>
    fb.group({
        ...GenerateEntityForm(user, fb).controls,
        name: [user?.name, Validators.required],
        username: [user?.username, Validators.required],
        email: [user?.email, Validators.required],
        address: GenerateAddressForm(user?.address, fb),
        phone: [user?.phone, Validators.required],
        website: [user?.website, Validators.required],
        company: GenerateCompanyForm(user?.company, fb)
    });
