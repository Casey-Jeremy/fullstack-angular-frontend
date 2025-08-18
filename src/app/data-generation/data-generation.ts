import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf
import { FormsModule } from '@angular/forms'; // For ngModel
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-generation',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Add CommonModule and FormsModule
  templateUrl: './data-generation.html',
  styleUrls: ['./data-generation.css']
})
export class DataGenerationComponent {
  recordCount: number | null = null;
  message: string = '';
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  onGenerate(): void {
    if (!this.recordCount || this.recordCount <= 0) {
      this.message = 'Please enter a valid number of records.';
      return;
    }

    this.isLoading = true;
    this.message = `Generating ${this.recordCount} records... Thank you for your patience.`;

    this.apiService.generateExcel(this.recordCount).subscribe({
      next: (response) => {
        this.message = response;
        this.isLoading = false;
      },
      error: (err) => {
        this.message = `An error occurred: ${err.message}`;
        this.isLoading = false;
      }
    });
  }
}