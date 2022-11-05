import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IAddress } from "../../interfaces";
import { GenerateGeoForm } from "./geo-form";

export const GenerateAddressForm = (address: IAddress, fb: FormBuilder): FormGroup =>
    fb.group({
        street: [address?.street, Validators.required],
        suite: [address?.suite, Validators.required],
        city: [address?.city, Validators.required],
        zipcode: [address?.zipcode, Validators.required],
        geo: GenerateGeoForm(address?.geo, fb)
    });
