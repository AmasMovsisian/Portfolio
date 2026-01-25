import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';
import { PortfolioDialog } from './components/portfolio-dialog/portfolio-dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboutMe, Skills, Portfolio, PortfolioDialog],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');

  iconsPath: string[] = [
    "/assets/Portfolio-Dialog/Join/Angular.png",
    "/assets/Portfolio-Dialog/Join/CSS.png",
    "/assets/Portfolio-Dialog/Join/Firebase.png",
    "/assets/Portfolio-Dialog/Join/HTML.png",
    "/assets/Portfolio-Dialog/Join/TypeScript.png",
  ];

}
