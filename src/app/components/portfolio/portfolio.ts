import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
})
export class Portfolio {
  @Output() openJoinDialog = new EventEmitter<void>();
  @Output() openElPolloLocoDialog = new EventEmitter<void>();
  @Output() openDaBubbleDialog = new EventEmitter<void>();

  onOpenJoinDialog() {
    this.openJoinDialog.emit();
  }

  onOpenElPolloLocoDialog() {
    this.openElPolloLocoDialog.emit();
  }

  onOpenDaBubbleDialog() {
    this.openDaBubbleDialog.emit();
  }
}