import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-dialog.html',
  styleUrl: './portfolio-dialog.scss',
})
export class PortfolioDialog {

  @Input() projectNumber!: string;
  @Input() title!: string;
  @Input() message!: string;

  @Input() icons!: string[];

  @Input() mainImagePath!: string;

}
