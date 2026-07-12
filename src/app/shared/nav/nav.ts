import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }


  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {

    const target = event.target as HTMLElement;

    const clickedInsideMenu =
      target.closest('.mobile-menu');

    const clickedHamburger =
      target.closest('.hamburger-menu');


    if (!clickedInsideMenu && !clickedHamburger) {
      this.closeMenu();
    }

  }

}