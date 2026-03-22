import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  isChecked = false;

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
}