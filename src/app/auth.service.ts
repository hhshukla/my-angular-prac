import { Injectable } from '@angular/core';

interface User {
  name: string;
  phone: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [];

  registerUser(user: User): boolean {
    if (this.users.find((u) => u.phone === user.phone)) return false;
    this.users.push(user);
    return true;
  }

  validateUser(phone: string, password: string): boolean {
    return this.users.some((u) => u.phone === phone && u.password === password);
  }

  sendOtp(phone: string): string {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    console.log(`Simulated SMS to ${phone}: Your OTP is ${otp}`);
    return otp;
  }
}
