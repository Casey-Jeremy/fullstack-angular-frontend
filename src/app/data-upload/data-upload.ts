import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-upload',
  standalone: true,
  imports: [NgIf],
  templateUrl: './data-upload.html',
  styleUrls: ['./data-upload.css']
})
export class DataUploadComponent {
  selectedFile: File | null = null;
  message: string = '';
  progress: number = 0;
  isUploading: boolean = false;

  constructor(private apiService: ApiService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    this.message = ''; // Clear previous messages
  }

  onUpload(): void {
    if (!this.selectedFile) return;

    // 1. Set UI state to uploading
    this.isUploading = true;
    this.progress = 0;
    this.message = 'Uploading file to server...';

    // 2. Subscribe to progress events FIRST
    this.apiService.getProgressEvents().subscribe(
      progressPercentage => {
        this.progress = progressPercentage;
        this.message = 'Processing in database...';
      }
    );

    // 3. Then, start the actual upload
    this.apiService.uploadCsv(this.selectedFile).subscribe({
      next: (response) => {
        this.message = response;
        this.isUploading = false; // Upload finished
      },
      error: (err) => {
        this.message = `Error: ${err.message}`;
        this.isUploading = false; // Upload failed
      }
    });
  }
}