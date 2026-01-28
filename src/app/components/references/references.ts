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
      text: '1Amas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch - Team Partner'
    },
    {
      id: 'comment-2', 
      text: '2Amas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch - Team Partner'
    },
    {
      id: 'comment-3',
      text: '3Amas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch - Team Partner'
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