import {
  Component,
  Inject,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './portfolio-dialog.html',
  styleUrl: './portfolio-dialog.scss',
})
export class PortfolioDialog implements AfterViewInit {
  /**
   * The project number/identifier.
   */
  projectNumber: string;

  /**
   * The title of the project.
   */
  title: string;

  /**
   * The translation key for the project description message.
   */
  messageKey: string;

  /**
   * Array of icon class names or paths representing technologies used.
   */
  icons: string[];

  /**
   * The file path to the main project image.
   */
  mainImagePath: string;

  /**
   * The GitHub repository URL for the project.
   */
  githubLink: string;

  /**
   * The live demo URL for the project.
   */
  liveLink: string;

  /**
   * Emits when navigating to the next project.
   */
  @Output() nextProject = new EventEmitter<void>();

  /**
   * Reference to the dialog content container element.
   */
  @ViewChild('dialogContent')
  dialogContent?: ElementRef<HTMLElement>;

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef,
  ) {
    this.projectNumber = data.projectNumber;
    this.title = data.title;
    this.messageKey = data.messageKey;
    this.icons = data.icons;
    this.mainImagePath = data.mainImagePath;
    this.githubLink = data.githubLink || '';
    this.liveLink = data.liveLink || '';
  }

  /**
   * After the view initializes, scrolls the dialog content to the top.
   */
  ngAfterViewInit() {
    this.dialogContent?.nativeElement.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }

  /**
   * Closes the dialog.
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * Emits the nextProject event to navigate to the next project.
   */
  goToNextProject() {
    this.nextProject.emit();
  }
}
