import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { Header } from './components/header/header';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';
import { PortfolioDialog } from './components/portfolio-dialog/portfolio-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    Header, 
    AboutMe, 
    Skills, 
    Portfolio, 
    PortfolioDialog
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');


  iconsPathJoin: string[] = [
    "/assets/Portfolio-Dialog/Join/Angular.png",
    "/assets/Portfolio-Dialog/Join/CSS.png",
    "/assets/Portfolio-Dialog/Join/Firebase.png",
    "/assets/Portfolio-Dialog/Join/HTML.png",
    "/assets/Portfolio-Dialog/Join/TypeScript.png",
  ];

  iconsPathElPolloLoco: string[] = [
    "/assets/Portfolio-Dialog/ElPolloLoco/HTML.png",
    "/assets/Portfolio-Dialog/ElPolloLoco/CSS.png",
    "/assets/Portfolio-Dialog/ElPolloLoco/JavaScript.png",
  ];

  iconsPathDaBubble: string[] = [
    "/assets/Portfolio-Dialog/DaBubble/HTML.png",
    "/assets/Portfolio-Dialog/DaBubble/CSS.png",
    "/assets/Portfolio-Dialog/DaBubble/JavaScript.png",
  ];


  projects = [
    {
      projectNumber: "01",
      title: "Join",
      message: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      mainImagePath: "/assets/Portfolio-Dialog/Join/Join-img.png",
      icons: this.iconsPathJoin
    },
    {
      projectNumber: "02",
      title: "El Pollo Loco",
      message: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      mainImagePath: "/assets/Portfolio-Dialog/ElPolloLoco/ElPolloLoco-img.png",
      icons: this.iconsPathElPolloLoco
    },
    {
      projectNumber: "03",
      title: "DABubble",
      message: "This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.",
      mainImagePath: "/assets/Portfolio-Dialog/DaBubble/DaBubble.png",
      icons: this.iconsPathDaBubble
    }
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

  get daBubbleProjectData() {
    return this.projects[2];
  }

  openPortfolioDialog(projectIndex: number) {
    this.currentProjectIndex = projectIndex;
    
    if (this.dialogRef) {
      this.dialogRef.close();
    }
    
    this.dialogRef = this.dialog.open(PortfolioDialog, {
      data: this.projects[this.currentProjectIndex],
      panelClass: 'portfolio-dialog-container'
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

  openDaBubbleDialog() {
    this.openPortfolioDialog(2);
  }
}