import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ContactComponent {
  step = 1;

  bookingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  nextStep() {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;
      this.http
        .post('http://localhost:4000/api/send-confirmation', formData)
        .subscribe({
          next: () => {
            this.step = 2; // Go to confirm step
          },
          error: (err) => {
            console.error(err);
            alert('Email failed to send');
          },
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  // ✅ ADD THIS METHOD
  confirmBooking() {
    console.log('Booking confirmed:', this.bookingForm.value);
    this.step = 3; // Go to final step
  }

  reset() {
    this.bookingForm.reset();
    this.step = 1;
  }
}
