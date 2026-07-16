import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private router = inject(Router);

  /**
   * Navigates to the home page. If already on the home page, scrolls smoothly to the top.
   */
  goToHome() {
    if (this.router.url === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']);
    }
  }
}
