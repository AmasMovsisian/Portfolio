import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  /**
   * Signal holding the current language ('de' or 'en').
   */
  currentLanguage = signal<'de' | 'en'>('de');

  constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);
    const lang = (localStorage.getItem('lang') as 'de' | 'en') || 'de';
    this.currentLanguage.set(lang);
    translate.use(lang);
  }

  /**
   * Changes the application language and persists it to localStorage.
   * @param language - The language code to switch to ('de' or 'en').
   */
  change(language: 'de' | 'en') {
    this.translate.use(language);
    this.currentLanguage.set(language);
    localStorage.setItem('lang', language);
  }

  /**
   * Returns the current language value.
   * @returns The current language code.
   */
  current() {
    return this.currentLanguage();
  }
}