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
  projectNumber: string;
  title: string;
  messageKey: string;
  icons: string[];
  mainImagePath: string;
  githubLink: string;
  liveLink: string;

  @Output() nextProject = new EventEmitter<void>();

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

  ngAfterViewInit() {
    this.dialogContent?.nativeElement.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  goToNextProject() {
    this.nextProject.emit();
  }
}
