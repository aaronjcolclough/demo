import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ICompany } from "../../interfaces";

export const GenerateCompanyForm = (company: ICompany, fb: FormBuilder): FormGroup =>
    fb.group({
        name: [company?.name, Validators.required],
        catchPhrase: [company?.catchPhrase, Validators.required],
        bs: [company?.bs, Validators.required],
    });
