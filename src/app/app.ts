import { Component } from '@angular/core';
import { DataProcessingComponent } from './data-processing/data-processing';
import { DataUploadComponent } from './data-upload/data-upload'; 
import { StudentReportComponent } from './student-report/student-report';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataProcessingComponent, DataUploadComponent, StudentReportComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'fullstack-student-app';
}