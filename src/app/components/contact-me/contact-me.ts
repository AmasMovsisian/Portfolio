import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, Router } from '@angular/router';
import { FragmentService } from '../../services/fragment.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  isChecked = false;
  showSuccessMessage = false;
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

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    this.contactForm.patchValue({
      privacy: this.isChecked,
    });
    this.contactForm.get('privacy')?.markAsTouched();
  }

  closeSuccessMessage() {
    this.showSuccessMessage = false;
  }

  autoResize(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    const maxHeight = 250;
    textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
  }

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

  goToLegalNotice() {
    this.router.navigate(['/legal-notice']).then(() => {
      this.fragmentService.setFragment('privacy_policy');
    });
  }

  sendMail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = this.contactForm.value;
    console.log('Fake mail:', formData);

    setTimeout(() => {
      this.showSuccessMessage = true;
      this.contactForm.reset();
      this.isChecked = false;
    }, 800);
  }
}