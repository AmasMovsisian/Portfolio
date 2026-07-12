import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  isChecked = false;

  contactForm;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      message: ['', Validators.required],

      privacy: [false, Validators.requiredTrue],
    });
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;

    this.contactForm.patchValue({
      privacy: this.isChecked,
    });
  }

  sendMail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = this.contactForm.value;

    emailjs
      .send(
        'service_fkvpjau',
        'template_qybgese',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'NdDJD8FrlviVBKvf9',
      )
      .then(() => {
        alert('Message sent successfully!');

        this.contactForm.reset();

        this.isChecked = false;
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert(JSON.stringify(error));
      });
  }
}
