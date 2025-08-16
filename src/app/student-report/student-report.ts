import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-report',
  standalone: true,
  imports: [CommonModule], // Add CommonModule for *ngFor and *ngIf
  templateUrl: './student-report.html',
  styleUrls: ['./student-report.css']
})
export class StudentReportComponent implements OnInit {
  page: any; // To hold the page object from the backend

  private studentIdSearch: number | undefined;
  private classFilter: string | undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchStudents();
  }

  fetchStudents(page: number = 0, size: number = 10): void {
    this.apiService.getStudents(page, size, this.studentIdSearch, this.classFilter)
      .subscribe(response => {
        this.page = response;
      });
  }

  goToPage(pageNumber: number): void {
    this.fetchStudents(pageNumber);
  }

  onSearch(event: any): void {
    const studentId = event.target.value;
    this.studentIdSearch = studentId ? Number(studentId) : undefined;
    this.fetchStudents(); // Fetch from the first page
  }

  onFilter(event: any): void {
    this.classFilter = event.target.value;
    this.fetchStudents(); // Fetch from the first page
  }
}