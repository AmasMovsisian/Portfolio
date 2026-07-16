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
  /**
   * The index of the currently displayed comment.
   */
  currentIndex = 1;

  /**
   * Array of reference comments with translation keys and authors.
   */
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

  /**
   * Advances to the next slide in the carousel.
   */
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
  }

  /**
   * Moves to the previous slide in the carousel.
   */
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
  }

  /**
   * Navigates to a specific slide by index.
   * @param index - The target slide index.
   */
  goToSlide(index: number) {
    this.currentIndex = index;
  }

  /**
   * Determines the CSS position class for a comment based on its index relative to the current slide.
   * @param index - The index of the comment.
   * @returns The position class: 'center', 'left', 'right', or 'hidden'.
   */
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

  /**
   * Returns the CSS transform string for a comment.
   * Currently returns an empty string.
   * @param index - The index of the comment.
   * @returns The transform CSS value.
   */
  getTransform(index: number): string {
    return '';
  }
}
