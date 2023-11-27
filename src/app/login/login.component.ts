import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  formSubmitted: boolean = false;
  loginForm: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      if (this.username === 'luisalexhg' && this.password === '12345678') {
        console.log("Login ok")
        this.router.navigate(['/home'])
      } else {
        alert("Credenciales fallidas")
      }
    }
  }
}