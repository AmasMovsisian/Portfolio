import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { AboutMe } from './components/about-me/about-me';
import { Skills } from './components/skills/skills';
import { Portfolio } from './components/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, AboutMe, Skills, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
