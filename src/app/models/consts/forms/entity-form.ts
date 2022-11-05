import { FormBuilder, FormGroup } from "@angular/forms";
import { IEntity } from "../../interfaces";

export const GenerateEntityForm = (e: IEntity, fb: FormBuilder): FormGroup =>
    fb.group({
        id: [e?.id]
    });
