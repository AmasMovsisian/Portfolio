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
  @Output() openJoinDialog = new EventEmitter<void>();
  @Output() openElPolloLocoDialog = new EventEmitter<void>();
  @Output() openCoderrDialog = new EventEmitter<void>();

  onOpenJoinDialog() {
    this.openJoinDialog.emit();
  }

  onOpenElPolloLocoDialog() {
    this.openElPolloLocoDialog.emit();
  }

  onOpenCoderrDialog() {
    this.openCoderrDialog.emit();
  }
}
