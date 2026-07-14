import { Component, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  menuOpen = false;

  constructor(public languageService: LanguageService) {}

  changeLanguage(language: 'de' | 'en') {
    this.languageService.change(language);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    const clickedInsideMenu = target.closest('.mobile-menu');

    const clickedHamburger = target.closest('.hamburger-menu');

    if (!clickedInsideMenu && !clickedHamburger) {
      this.closeMenu();
    }
  }
}
