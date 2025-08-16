import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // <-- 1. IMPORT THIS
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-processing',
  standalone: true, // <-- 2. ADD THIS
  imports: [NgIf],    // <-- 3. ADD THIS
  templateUrl: './data-processing.html',
  styleUrls: ['./data-processing.css']
})
export class DataProcessingComponent {
  selectedFile: File | null = null;
  message: string = '';

  constructor(private apiService: ApiService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onUpload(): void {
    if (!this.selectedFile) {
      return;
    }

    this.message = 'Uploading and processing... please wait.';
    this.apiService.processExcel(this.selectedFile).subscribe({
      next: (response) => {
        this.message = response;
      },
      error: (error) => {
        this.message = 'An error occurred. Check the console for details.';
        console.error(error);
      }
    });
  }
}