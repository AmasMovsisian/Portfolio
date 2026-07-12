import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  currentIndex = 1;
  
  comments = [
    {
      id: 'comment-1',
      text: 'Amas ist ein ruhiges, konzentriertes und sehr gewissenhaftes Teammitglied. Seine außergewöhnliche Beobachtungsgabe ermöglicht es ihm, Fehler im Projekt aufzuspüren, die anderen entgehen würden. Besonders hervorzuheben ist seine Fähigkeit, Feedback auf eine höfliche und konstruktive Weise zu vermitteln, wodurch er maßgeblich zu einem harmonischen Arbeitsklima beigetragen hat. Seine ruhige Art und analytische Denkweise machen ihn zu einer wertvollen Unterstützung im Projektteam.',
      author: 'Refiye Külhanbey - Team Partner'
    },
    {
      id: 'comment-2',
      text: 'Amas stood out in the Join project through his highly reliable and dedicated work ethic. He implemented the features of the Angular Kanban board carefully and with strong technical confidence. In working with Firebase, he demonstrated a solid understanding of data structures and asynchronous processes. He actively participated in team discussions and always communicated openly and constructively. Overall, he made an important and valuable contribution to the success of the project.',
      author: 'Philipp Biebert - Team Partner'
    },
    {
      id: 'comment-3',
      text: 'Amas worked as a team member on the “Join” project and showed strong commitment and reliability. He actively contributed to the project’s success and consistently delivered his tasks with care. Even in challenging situations, he demonstrated a proactive and solution-oriented approach. His willingness to support others was particularly noteworthy. His collaborative mindset and positive attitude made a lasting contribution to the team.',
      author: 'Akin - Join Project'
    }
  ];

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  getPositionClass(index: number): string {
    if (index === this.currentIndex) return 'center';
    if (index === (this.currentIndex - 1 + this.comments.length) % this.comments.length) return 'left';
    if (index === (this.currentIndex + 1) % this.comments.length) return 'right';
    return 'hidden';
  }

  getTransform(index: number): string {
    return '';
  }
}