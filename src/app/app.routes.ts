import { Routes } from '@angular/router';
import { LegalNotice } from './shared/legal-notice/legal-notice';

/**
 * Application route configuration.
 */
export const routes: Routes = [
  {
    path: 'legal-notice',
    component: LegalNotice,
  },
];