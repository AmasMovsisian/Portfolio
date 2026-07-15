import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
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

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;

    textarea.style.height = 'auto';

    const maxHeight = 250;

    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
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

