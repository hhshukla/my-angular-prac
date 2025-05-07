import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../app/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isSignup = true;
  showOtpInput = false;
  generatedOtp = '';
  message = '';

  signupForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    password: ['', Validators.required],
  });

  loginForm = this.fb.group({
    phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    password: ['', Validators.required],
    otp: [''],
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  toggleForm() {
    this.isSignup = !this.isSignup;
    this.message = '';
    this.showOtpInput = false;
  }

  submitSignup() {
    const user = {
      name: this.signupForm.value.name || '',
      phone: this.signupForm.value.phone || '',
      password: this.signupForm.value.password || '',
    };
    if (this.authService.registerUser(user)) {
      this.message = 'Signup successful. Please log in.';
      this.toggleForm();
    } else {
      this.message = 'User already exists!';
    }
  }

  submitLogin() {
    const { phone, password } = this.loginForm.value;
    if (!this.showOtpInput) {
      if (phone && password && this.authService.validateUser(phone, password)) {
        this.generatedOtp = this.authService.sendOtp(phone);
        this.message = 'OTP sent (simulated). Please enter it.';
        this.showOtpInput = true;
      } else {
        this.message = 'Invalid credentials.';
      }
    } else {
      if (this.loginForm.value.otp === this.generatedOtp) {
        this.message = 'Login successful!';
      } else {
        this.message = 'Invalid OTP.';
      }
    }
  }
}
