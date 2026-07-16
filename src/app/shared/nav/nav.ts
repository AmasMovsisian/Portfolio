import { Component, HostListener, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { Router, RouterLink } from '@angular/router';
import { FragmentService } from '../../services/fragment.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  /**
   * Tracks whether the mobile menu is currently open.
   */
  menuOpen = false;

  private fragmentService = inject(FragmentService);

  constructor(
    public languageService: LanguageService,
    private router: Router,
  ) {}

  /**
   * Changes the application language.
   * @param language - The target language code ('de' or 'en').
   */
  changeLanguage(language: 'de' | 'en') {
    this.languageService.change(language);
  }

  /**
   * Toggles the mobile menu open/closed state.
   */
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
   * Closes the mobile menu.
   */
  closeMenu() {
    this.menuOpen = false;
  }

  /**
   * Navigates to the home page or scrolls to the home section if already on the home page.
   */
  goToHome() {
    this.closeMenu();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      document.getElementById('home')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  /**
   * Listens for clicks outside the mobile menu and hamburger icon to close the menu.
   * @param event - The mouse click event.
   */
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
