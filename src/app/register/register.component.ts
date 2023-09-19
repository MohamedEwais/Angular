import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }

    return null;
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
       [Validators.required, Validators.email]
      ],
      name: [
        '',
         Validators.required
        ],
      username: [
        '',
         [Validators.required, Validators.pattern(/^\S*$/)]
        ],
      password: [
        '',
         [Validators.required,
          Validators.minLength(3),
          Validators.pattern( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
         ]
        ],
      confirmPassword: [
        '',
         Validators.required
        ]
    },
     
     );
  }

  
    

  onRegister() {
    if (this.registerForm.valid) {
      console.log( this.registerForm.value);
    }
  }
  }

  



  