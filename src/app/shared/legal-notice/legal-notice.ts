import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { Footer } from '../footer/footer';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [Nav, Footer, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
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
