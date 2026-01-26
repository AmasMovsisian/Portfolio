import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  templateUrl: './portfolio-dialog.html',
  styleUrl: './portfolio-dialog.scss',
})
export class PortfolioDialog {
  
  projectNumber: string;
  title: string;
  message: string;
  icons: string[];
  mainImagePath: string;

  @Output() nextProject = new EventEmitter<void>();

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef
  ) {
    this.projectNumber = data.projectNumber;
    this.title = data.title;
    this.message = data.message;
    this.icons = data.icons;
    this.mainImagePath = data.mainImagePath;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  goToNextProject() {
    this.nextProject.emit();
  }
}