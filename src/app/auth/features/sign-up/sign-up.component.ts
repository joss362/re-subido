import { Component } from '@angular/core';
import {ReactiveFormsModule} from fromimportimport { AuthService } from '../../data-access/auth.service';
 { hasEmailError } from '../../utils/validators';
 '@angular/forms';




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
  private _formBuilder = inject(FormBuilder);
  private _authService=inject(AuthService); 

  isRequired(field: 'email' | 'password'){
    return isRequired(field, this.form);
  }

  hasEmailError(){
    return hasEmailError(this.form)
  }

  form =this._formBuilder.group<any>({
    email: this._formBuilder.control('',[
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('',Validators.required)
  });
  async submit(){
    if(this.form.invalid) return;

    try{

    const {email, password}=this.form.value;
    if(!email || !password) return;

    await this._authService.signUp({email, password}) 

    toast.success('El ususario fue creado correctamente')
    }catch(error){
      TransformStream.error('Hubo algun error');
      
    }
  } 

}
