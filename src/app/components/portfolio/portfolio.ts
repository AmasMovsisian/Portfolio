import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  /**
   * Emits when the Amasia project dialog should be opened.
   */
  @Output() openAmasiaDialog = new EventEmitter<void>();

  /**
   * Emits when the Join project dialog should be opened.
   */
  @Output() openJoinDialog = new EventEmitter<void>();

  /**
   * Emits when the El Pollo Loco project dialog should be opened.
   */
  @Output() openElPolloLocoDialog = new EventEmitter<void>();

  /**
   * Emits when the Coderr project dialog should be opened.
   */
  @Output() openCoderrDialog = new EventEmitter<void>();

  /**
   * Triggers the openAmasiaDialog event.
   */
  onOpenAmasiaDialog() {
    this.openAmasiaDialog.emit();
  }

  /**
   * Triggers the openJoinDialog event.
   */
  onOpenJoinDialog() {
    this.openJoinDialog.emit();
  }

  /**
   * Triggers the openElPolloLocoDialog event.
   */
  onOpenElPolloLocoDialog() {
    this.openElPolloLocoDialog.emit();
  }

  /**
   * Triggers the openCoderrDialog event.
   */
  onOpenCoderrDialog() {
    this.openCoderrDialog.emit();
  }
}