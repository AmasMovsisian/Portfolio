import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  /**
   * Reference to the about image DOM element.
   */
  @ViewChild('aboutImage') aboutImage!: ElementRef<HTMLDivElement>;

  /**
   * Flag indicating whether the effect is currently active.
   */
  private effectActivated = false;

  /**
   * Activates the effect for viewport widths between 319px and 1500px.
   * Adds the 'show-effect' CSS class to the about image element.
   */
  activateEffect() {
    if (window.innerWidth <= 1500 && window.innerWidth >= 319) {
      this.effectActivated = true;
      this.aboutImage.nativeElement.classList.add('show-effect');
    }
  }

  /**
   * Listens to window resize events.
   * Removes the 'show-effect' class when viewport is outside the range 319px–1285px.
   */
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
