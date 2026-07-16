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
  menuOpen = false;
  private fragmentService = inject(FragmentService);

  constructor(
    public languageService: LanguageService,
    private router: Router
  ) {}

  changeLanguage(language: 'de' | 'en') {
    this.languageService.change(language);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  goToHome() {
    this.closeMenu();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      document.getElementById('home')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
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