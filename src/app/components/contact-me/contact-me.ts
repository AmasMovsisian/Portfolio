import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { FragmentService } from '../../services/fragment.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  /**
   * Tracks the checkbox state for privacy policy agreement.
   */
  isChecked = false;

  /**
   * Controls the visibility of the success message after form submission.
   */
  showSuccessMessage = false;

  /**
   * Reactive form group for the contact form with validation rules.
   */
  contactForm;

  private fragmentService = inject(FragmentService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });
  }

  /**
   * Toggles the privacy checkbox state and updates the form control.
   */
  toggleCheckbox() {
    this.isChecked = !this.isChecked;

    this.contactForm.patchValue({
      privacy: this.isChecked,
    });

    this.contactForm.get('privacy')?.markAsTouched();
  }

  /**
   * Hides the success message overlay.
   */
  closeSuccessMessage() {
    this.showSuccessMessage = false;
  }

  /**
   * Automatically adjusts the height of a textarea element based on its content.
   * Caps the height at 250px.
   * @param event - The input event triggered by the textarea.
   */
  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;

    textarea.style.height = 'auto';

    const maxHeight = 250;

    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  }

  /**
   * Returns the translation key for the error message of a given form control.
   * @param controlName - The name of the form control.
   * @returns The translation key string, or an empty string if no error.
   */
  getError(controlName: string): string {
    const control = this.contactForm.get(controlName);

    if (!control || !control.touched || !control.invalid) {
      return '';
    }

    switch (controlName) {
      case 'name':
        return 'CONTACT.ERROR_NAME';

      case 'email':
        if (control.hasError('required')) {
          return 'CONTACT.ERROR_EMAIL_REQUIRED';
        }

        if (control.hasError('email')) {
          return 'CONTACT.ERROR_EMAIL_INVALID';
        }

        return '';

      case 'message':
        return 'CONTACT.ERROR_MESSAGE';

      case 'privacy':
        return 'CONTACT.ERROR_PRIVACY';

      default:
        return '';
    }
  }

  /**
   * Navigates to the legal notice page and sets the fragment to the privacy policy section.
   */
  goToLegalNotice() {
    this.router.navigate(['/legal-notice']).then(() => {
      this.fragmentService.setFragment('privacy_policy');
    });
  }

  /**
   * Validates the form and sends the email via EmailJS if valid.
   * Resets the form and shows a success message on success.
   */
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
        this.showSuccessMessage = true;

        this.contactForm.reset();

        this.isChecked = false;
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
      });
  }
}
