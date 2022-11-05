import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IGeo } from "../../interfaces";

export const GenerateGeoForm = (geo: IGeo, fb: FormBuilder): FormGroup =>
    fb.group({
        lat: [geo?.lat, Validators.required],
        lng: [geo?.lng, Validators.required],
    });
