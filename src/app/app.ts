import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { Header } from './components/header/header';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';
import { PortfolioDialog } from './components/portfolio-dialog/portfolio-dialog';
import { References } from './components/references/references';
import { ContactMe } from './components/contact-me/contact-me';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    AboutMe,
    Skills,
    Portfolio,
    References,
    ContactMe,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  router = inject(Router);

  protected readonly title = signal('Portfolio');

  iconsPathJoin: string[] = [
    '/assets/Portfolio-Dialog/Join/Angular.png',
    '/assets/Portfolio-Dialog/Join/CSS.png',
    '/assets/Portfolio-Dialog/Join/Firebase.png',
    '/assets/Portfolio-Dialog/Join/HTML.png',
    '/assets/Portfolio-Dialog/Join/TypeScript.png',
  ];

  iconsPathElPolloLoco: string[] = [
    '/assets/Portfolio-Dialog/ElPolloLoco/HTML.png',
    '/assets/Portfolio-Dialog/ElPolloLoco/CSS.png',
    '/assets/Portfolio-Dialog/ElPolloLoco/JavaScript.png',
  ];

  iconsPathCoderr: string[] = [
    '/assets/Portfolio-Dialog/Coderr/Python.png',
    '/assets/Portfolio-Dialog/Coderr/Django.png',
    '/assets/Portfolio-Dialog/Coderr/Linux.png',
  ];

  projects = [
    {
      projectNumber: '01',
      title: 'Join',
      messageKey: 'PROJECTS.JOIN.DESCRIPTION',
      mainImagePath: '/assets/Portfolio-Dialog/Join/Join-img.png',
      icons: this.iconsPathJoin,

      githubLink: 'DEIN_JOIN_GITHUB_LINK',
      liveLink: 'DEIN_JOIN_LIVE_TEST_LINK',
    },

    {
      projectNumber: '02',
      title: 'El Pollo Loco',
      messageKey: 'PROJECTS.POLLO.DESCRIPTION',
      mainImagePath: '/assets/Portfolio-Dialog/ElPolloLoco/ElPolloLoco-img.png',
      icons: this.iconsPathElPolloLoco,

      githubLink: 'https://github.com/AmasMovsisian/ElPolloLoco',
      liveLink: 'https://amas-movsisyan.developerakademie.net/Modul%2012/ElPolloLoco/index.html',
    },

    {
      projectNumber: '03',
      title: 'Coderr',
      messageKey: 'PROJECTS.CODERR.DESCRIPTION',
      mainImagePath: '/assets/Portfolio-Dialog/Coderr/Coderr.png',
      icons: this.iconsPathCoderr,

      githubLink: 'https://github.com/AmasMovsisian/Coderr_backend',
      liveLink: 'https://coderr.amasmovsisian.com/',
    },
  ];

  private dialog = inject(Dialog);
  private dialogRef: any;
  private currentProjectIndex: number = 0;

  get joinProjectData() {
    return this.projects[0];
  }

  get elPolloLocoProjectData() {
    return this.projects[1];
  }

  get CoderrProjectData() {
    return this.projects[2];
  }

  openPortfolioDialog(projectIndex: number) {
    this.currentProjectIndex = projectIndex;

    if (this.dialogRef) {
      this.dialogRef.close();
    }

    this.dialogRef = this.dialog.open(PortfolioDialog, {
      data: this.projects[this.currentProjectIndex],
      panelClass: 'portfolio-dialog-container',
    });

    this.dialogRef.componentInstance.nextProject.subscribe(() => {
      this.goToNextProject();
    });
  }

  goToNextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;

    this.dialogRef.close();
    this.openPortfolioDialog(this.currentProjectIndex);
  }

  openJoinDialog() {
    this.openPortfolioDialog(0);
  }

  openElPolloLocoDialog() {
    this.openPortfolioDialog(1);
  }

  openCoderrDialog() {
    this.openPortfolioDialog(2);
  }
}
