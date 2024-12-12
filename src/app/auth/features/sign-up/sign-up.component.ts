import { Component, inject } from '@angular/core';
import {FormBuilder,FormControl,Validators,ReactiveFormsModule} from '@angular/forms';
import { hasEmailError, isRequired } from '../../utils/validators';
import { AuthService } from '../../data-access/auth.service';
import{toast} from 'ngx-sonner';
import{Router,RouterLink} from '@angular/router';





interface FormSignUp {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './sign-up.component.html',
  
})
export default class SignUpComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService=inject(AuthService); 

  private _router=inject(Router);

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

    await this._authService.signUp({email, password}) ;

    toast.success('El ususario fue creado correctamente');

    this._router.navigateByUrl('/tasks')
    }catch(error){
      TransformStream.error('Hubo algun error');
      
    }
  } 

}
