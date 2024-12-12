import { Component } from '@angular/core';
import {ReactiveFormsModule} from from '@angular/forms';




interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  
})
export default class SignUpComponent {
  private _formBuilder = inject(NonNullableFormBuilder);

  form =this._formBuilder.group<any>({
    email: this._formBuilder.control('',[
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('',Validators.required)
  });
  submit(){
    if(this.form.invalid) return;

    const {email, password}=this.form.value;
    if(!email || !password) return;
    console.log({email, password})
  }
}
