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
    text: 'Amas is a calm, focused, and reliable team member. His strong attention to detail helps him identify issues others might miss. He communicates feedback respectfully and contributes to a positive team environment. His analytical thinking and responsible approach make him a valuable support within the team.',
    author: 'Refiye - Team Partner'
  },
  {
    id: 'comment-2',
    text: 'Amas demonstrated strong technical skills and reliability during the Join project. He implemented Angular features with confidence, worked effectively with Firebase, and actively contributed through clear and constructive communication. His structured approach and willingness to collaborate had a positive impact on the overall project success.',
    author: 'Philipp - Team Partner'
  },
  {
    id: 'comment-3',
    text: 'Amas showed great commitment and a solution-oriented mindset throughout the Join project. He completed tasks carefully, supported the team, and made a valuable contribution to the project’s success. His positive attitude, reliability, and ability to handle challenges made him a strong team member.',
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