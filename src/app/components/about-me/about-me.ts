import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

  @ViewChild('aboutImage') aboutImage!: ElementRef<HTMLDivElement>;

  private effectActivated = false;

  activateEffect() {
    if (window.innerWidth <= 1500 && window.innerWidth >= 319) {
      this.effectActivated = true;
      this.aboutImage.nativeElement.classList.add('show-effect');
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 1285 || window.innerWidth < 319) {
      this.effectActivated = false;

      if (this.aboutImage) {
        this.aboutImage.nativeElement.classList.remove('show-effect');
      }
    }
  }

}