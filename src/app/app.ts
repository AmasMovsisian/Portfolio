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

  /**
   * Signal holding the application title.
   */
  protected readonly title = signal('Portfolio');

  /**
   * Icon paths for the Join project.
   */
  iconsPathJoin: string[] = [
    '/assets/Portfolio-Dialog/Join/Angular.png',
    '/assets/Portfolio-Dialog/Join/TypeScript.png',
    '/assets/Portfolio-Dialog/Join/Firebase.png',
  ];

  /**
   * Icon paths for the El Pollo Loco project.
   */
  iconsPathElPolloLoco: string[] = [
    '/assets/Portfolio-Dialog/ElPolloLoco/HTML.png',
    '/assets/Portfolio-Dialog/ElPolloLoco/CSS.png',
    '/assets/Portfolio-Dialog/ElPolloLoco/JavaScript.png',
  ];

  /**
   * Icon paths for the Coderr project.
   */
  iconsPathCoderr: string[] = [
    '/assets/Portfolio-Dialog/Coderr/Python.png',
    '/assets/Portfolio-Dialog/Coderr/Django.png',
    '/assets/Portfolio-Dialog/Coderr/Linux.png',
  ];

  /**
   * Array of project data objects for the portfolio.
   */
  projects = [
    {
      projectNumber: '01',
      title: 'Join',
      messageKey: 'PROJECTS.JOIN.DESCRIPTION',
      mainImagePath: '/assets/Portfolio-Dialog/Join/Join-img.png',
      icons: this.iconsPathJoin,
      githubLink: 'https://github.com/AmasMovsisian/Join.git',
      liveLink: 'https://join.amasmovsisian.com/login',
    },
    {
      projectNumber: '02',
      title: 'El Pollo Loco',
      messageKey: 'PROJECTS.POLLO.DESCRIPTION',
      mainImagePath: '/assets/Portfolio-Dialog/ElPolloLoco/ElPolloLoco-img.png',
      icons: this.iconsPathElPolloLoco,
      githubLink: 'https://github.com/AmasMovsisian/ElPolloLoco',
      liveLink: 'https://elpolloloco.amasmovsisian.com/',
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

  /**
   * Returns the Join project data.
   */
  get joinProjectData() {
    return this.projects[0];
  }

  /**
   * Returns the El Pollo Loco project data.
   */
  get elPolloLocoProjectData() {
    return this.projects[1];
  }

  /**
   * Returns the Coderr project data.
   */
  get CoderrProjectData() {
    return this.projects[2];
  }

  /**
   * Opens the portfolio dialog for a specific project index.
   * @param projectIndex - The index of the project to display.
   */
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

  /**
   * Navigates to the next project in the portfolio list and reopens the dialog.
   */
  goToNextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;

    this.dialogRef.close();
    this.openPortfolioDialog(this.currentProjectIndex);
  }

  /**
   * Opens the portfolio dialog for the Join project.
   */
  openJoinDialog() {
    this.openPortfolioDialog(0);
  }

  /**
   * Opens the portfolio dialog for the El Pollo Loco project.
   */
  openElPolloLocoDialog() {
    this.openPortfolioDialog(1);
  }

  /**
   * Opens the portfolio dialog for the Coderr project.
   */
  openCoderrDialog() {
    this.openPortfolioDialog(2);
  }
}