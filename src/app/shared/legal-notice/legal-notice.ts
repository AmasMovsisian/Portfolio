import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { FragmentService } from '../../services/fragment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [Nav, Footer, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice implements OnInit, OnDestroy {
  private fragmentService = inject(FragmentService);
  private subscription = new Subscription();
  private observer: MutationObserver | null = null;

  sections = [
    { title: 'LEGAL.IMPRINT_TITLE', texts: ['LEGAL.IMPRINT_TEXT'] },
    { title: 'LEGAL.CONTACT_TITLE', texts: ['LEGAL.CONTACT_TEXT'] },
    {
      id: 'privacy_policy',
      title: 'LEGAL.PRIVACY_POLICY_TITLE',
      texts: [
        'LEGAL.PRIVACY_POLICY_TEXT_1',
        'LEGAL.PRIVACY_POLICY_TEXT_2',
        'LEGAL.PRIVACY_POLICY_TEXT_3',
        'LEGAL.PRIVACY_POLICY_TEXT_4',
        'LEGAL.PRIVACY_POLICY_TEXT_5',
        'LEGAL.PRIVACY_POLICY_TEXT_6',
        'LEGAL.PRIVACY_POLICY_TEXT_7',
        'LEGAL.PRIVACY_POLICY_TEXT_8',
      ],
    },
    { title: 'LEGAL.ABOUT_TITLE', texts: ['LEGAL.ABOUT_TEXT_1', 'LEGAL.ABOUT_TEXT_2'] },
    { title: 'LEGAL.COPYRIGHT_TITLE', texts: ['LEGAL.COPYRIGHT_TEXT_1', 'LEGAL.COPYRIGHT_TEXT_2'] },
    {
      title: 'LEGAL.DISCLAIMER_TITLE',
      texts: ['LEGAL.DISCLAIMER_TEXT_1', 'LEGAL.DISCLAIMER_TEXT_2'],
    },
    { title: 'LEGAL.LINKS_TITLE', texts: ['LEGAL.LINKS_TEXT_1', 'LEGAL.LINKS_TEXT_2'] },
    { title: 'LEGAL.PRIVACY_TITLE', texts: ['LEGAL.PRIVACY_TEXT_1', 'LEGAL.PRIVACY_TEXT_2'] },
    {
      title: 'LEGAL.RESPONSIBLE_TITLE',
      texts: ['LEGAL.RESPONSIBLE_TEXT_1', 'LEGAL.RESPONSIBLE_TEXT_2'],
    },
    { title: 'LEGAL.HOSTING_TITLE', texts: ['LEGAL.HOSTING_TEXT_1', 'LEGAL.HOSTING_TEXT_2'] },
    {
      title: 'LEGAL.FORM_TITLE',
      texts: ['LEGAL.FORM_TEXT_1', 'LEGAL.FORM_TEXT_2', 'LEGAL.FORM_TEXT_3'],
    },
    { title: 'LEGAL.FONTS_TITLE', texts: ['LEGAL.FONTS_TEXT_1', 'LEGAL.FONTS_TEXT_2'] },
    { title: 'LEGAL.SERVER_TITLE', texts: ['LEGAL.SERVER_TEXT_1', 'LEGAL.SERVER_TEXT_2'] },
    { title: 'LEGAL.RIGHTS_TITLE', texts: ['LEGAL.RIGHTS_TEXT_1', 'LEGAL.RIGHTS_TEXT_2'] },
    { title: 'LEGAL.SSL_TITLE', texts: ['LEGAL.SSL_TEXT'] },
    { title: 'LEGAL.CHANGES_TITLE', texts: ['LEGAL.CHANGES_TEXT'] },
  ];

  ngOnInit() {
    this.subscription.add(
      this.fragmentService.fragment$.subscribe((fragment) => {
        if (fragment) {
          this.observeAndScroll(fragment);
        }
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.cleanupObserver();
  }

  private observeAndScroll(fragment: string) {
    this.cleanupObserver();

    const element = document.getElementById(fragment);
    if (element) {
      this.executeScroll(element);
      return;
    }

    this.observer = new MutationObserver(() => {
      const targetElement = document.getElementById(fragment);
      if (targetElement) {
        this.executeScroll(targetElement);
        this.cleanupObserver();
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  private executeScroll(element: HTMLElement) {
    setTimeout(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  private cleanupObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
