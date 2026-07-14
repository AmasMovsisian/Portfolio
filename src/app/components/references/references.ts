import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  currentIndex = 1;

  comments = [
    {
      id: 'comment-1',
      textKey: 'REFERENCES.COMMENT_1',
      author: 'Refiye - Team Partner',
    },
    {
      id: 'comment-2',
      textKey: 'REFERENCES.COMMENT_2',
      author: 'Philipp - Team Partner',
    },
    {
      id: 'comment-3',
      textKey: 'REFERENCES.COMMENT_3',
      author: 'Akin - Join Project',
    },
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
    if (index === this.currentIndex) {
      return 'center';
    }

    if (index === (this.currentIndex - 1 + this.comments.length) % this.comments.length) {
      return 'left';
    }

    if (index === (this.currentIndex + 1) % this.comments.length) {
      return 'right';
    }

    return 'hidden';
  }

  getTransform(index: number): string {
    return '';
  }
}
