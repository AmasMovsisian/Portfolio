import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = signal<'de' | 'en'>('de');

  constructor(private translate: TranslateService) {

    translate.addLangs(['de', 'en']);

    const lang = (localStorage.getItem('lang') as 'de' | 'en') || 'de';

    this.currentLanguage.set(lang);
    translate.use(lang);
  }


  change(language: 'de' | 'en') {

    this.translate.use(language);

    this.currentLanguage.set(language);

    localStorage.setItem('lang', language);
  }


  current() {
    return this.currentLanguage();
  }
}