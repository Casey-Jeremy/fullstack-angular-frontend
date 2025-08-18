import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/students';

  getProgressEvents(): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource(`${this.baseUrl}/progress`);
  
      eventSource.addEventListener('progress', event => {
        observer.next(JSON.parse((event as any).data));
      });
  
      eventSource.onerror = error => {
        observer.error(error);
        eventSource.close();
      };
  
      return () => {
        eventSource.close();
      };
    });
  }

  getStudents(page: number, size: number, studentId?: number, studentClass?: string): Observable<any> {
    let params = new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString());

    if (studentId) {
        params = params.set('studentId', studentId.toString());
    }
    if (studentClass) {
        params = params.set('studentClass', studentClass);
    }

    return this.http.get(this.baseUrl, { params });
}

  uploadCsv(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.baseUrl}/upload-csv`, formData, {
        responseType: 'text'
    });
}

  constructor(private http: HttpClient) { }

  // Method for Phase 1 (Data Generation)
  generateExcel(recordCount: number): Observable<string> {
    const params = new HttpParams().set('count', recordCount.toString());
    
    // NOTE: This uses GET, which we set up for easy browser testing.
    return this.http.get(`${this.baseUrl}/generate`, { params, responseType: 'text' });
  }

  // Method for Phase 2 (Data Processing)
  processExcel(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post(`${this.baseUrl}/process-excel`, formData, {
      responseType: 'text'
    });
  }
}