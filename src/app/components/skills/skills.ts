import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  constructor(private languageService: LanguageService) {}

  /**
   * Returns the appropriate growth mindset image path based on the current language.
   * @returns The image path for German or English version.
   */
  get growthImage() {
    return this.languageService.current() === 'de'
      ? '/assets/Skills/Growth Mindset/Growth-DE.png'
      : '/assets/Skills/Growth Mindset/Growth-EN.png';
  }

  /**
   * Array of front-end and back-end skill icons with their names and image paths.
   */
  frontEndIcons = [
    {
      name: 'HTML',
      path: '/assets/Skills/Front End/HTML.png',
    },
    {
      name: 'CSS',
      path: '/assets/Skills/Front End/CSS.png',
    },
    {
      name: 'JavaScript',
      path: '/assets/Skills/Front End/JavaScript.png',
    },
    {
      name: 'Material Design',
      path: '/assets/Skills/Front End/Material Design.png',
    },
    {
      name: 'TypeScript',
      path: '/assets/Skills/Front End/TypeScript.png',
    },
    {
      name: 'Angular',
      path: '/assets/Skills/Front End/Angular.png',
    },
    {
      name: 'RxJS',
      path: '/assets/Skills/Backend/RxJs.png',
    },
    {
      name: 'Firebase',
      path: '/assets/Skills/Front End/Firebase.png',
    },
    {
      name: 'Git',
      path: '/assets/Skills/Front End/Git.png',
    },
    {
      name: 'REST API',
      path: '/assets/Skills/Front End/Rest-Api.png',
    },
    {
      name: 'Scrum',
      path: '/assets/Skills/Front End/Scrum.png',
    },
    {
      name: 'Python',
      path: '/assets/Skills/Backend/Python.png',
    },
    {
      name: 'Django',
      path: '/assets/Skills/Backend/Django.png',
    },
    {
      name: 'PostgreSQL',
      path: '/assets/Skills/Backend/PostgreSQL.png',
    },
    {
      name: 'SQL',
      path: '/assets/Skills/Backend/SQL.png',
    },
    {
      name: 'Docker',
      path: '/assets/Skills/Backend/Docker.png',
    },
    {
      name: 'Linux',
      path: '/assets/Skills/Backend/Linux.png',
    },
    {
      name: 'Cloud',
      path: '/assets/Skills/Backend/Cloud.png',
    },
    {
      name: 'Heroku',
      path: '/assets/Skills/Backend/Heroku.png',
    },
  ];
}
