import { Component, AfterViewInit, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class LegalNotice implements OnInit, AfterViewInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private fragmentService = inject(FragmentService);
  private subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription = this.fragmentService.fragment$.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          this.scrollToFragment(fragment);
        }, 300);
      }
    });
  }

  ngAfterViewInit() {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => {
        this.scrollToFragment(fragment);
      }, 500);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private scrollToFragment(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setTimeout(() => {
        const retryElement = document.getElementById(fragment);
        if (retryElement) {
          retryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  }

  sections = [
    {
      title: 'LEGAL.IMPRINT_TITLE',
      texts: ['LEGAL.IMPRINT_TEXT'],
    },
    {
      title: 'LEGAL.CONTACT_TITLE',
      texts: ['LEGAL.CONTACT_TEXT'],
    },
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
    {
      title: 'LEGAL.ABOUT_TITLE',
      texts: ['LEGAL.ABOUT_TEXT_1', 'LEGAL.ABOUT_TEXT_2'],
    },
    {
      title: 'LEGAL.COPYRIGHT_TITLE',
      texts: ['LEGAL.COPYRIGHT_TEXT_1', 'LEGAL.COPYRIGHT_TEXT_2'],
    },
    {
      title: 'LEGAL.DISCLAIMER_TITLE',
      texts: ['LEGAL.DISCLAIMER_TEXT_1', 'LEGAL.DISCLAIMER_TEXT_2'],
    },
    {
      title: 'LEGAL.LINKS_TITLE',
      texts: ['LEGAL.LINKS_TEXT_1', 'LEGAL.LINKS_TEXT_2'],
    },
    {
      title: 'LEGAL.PRIVACY_TITLE',
      texts: ['LEGAL.PRIVACY_TEXT_1', 'LEGAL.PRIVACY_TEXT_2'],
    },
    {
      title: 'LEGAL.RESPONSIBLE_TITLE',
      texts: ['LEGAL.RESPONSIBLE_TEXT_1', 'LEGAL.RESPONSIBLE_TEXT_2'],
    },
    {
      title: 'LEGAL.HOSTING_TITLE',
      texts: ['LEGAL.HOSTING_TEXT_1', 'LEGAL.HOSTING_TEXT_2'],
    },
    {
      title: 'LEGAL.FORM_TITLE',
      texts: ['LEGAL.FORM_TEXT_1', 'LEGAL.FORM_TEXT_2', 'LEGAL.FORM_TEXT_3'],
    },
    {
      title: 'LEGAL.FONTS_TITLE',
      texts: ['LEGAL.FONTS_TEXT_1', 'LEGAL.FONTS_TEXT_2'],
    },
    {
      title: 'LEGAL.SERVER_TITLE',
      texts: ['LEGAL.SERVER_TEXT_1', 'LEGAL.SERVER_TEXT_2'],
    },
    {
      title: 'LEGAL.RIGHTS_TITLE',
      texts: ['LEGAL.RIGHTS_TEXT_1', 'LEGAL.RIGHTS_TEXT_2'],
    },
    {
      title: 'LEGAL.SSL_TITLE',
      texts: ['LEGAL.SSL_TEXT'],
    },
    {
      title: 'LEGAL.CHANGES_TITLE',
      texts: ['LEGAL.CHANGES_TEXT'],
    },
  ];
}