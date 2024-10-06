import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VisitorRecord } from '../models/visitor-record.model';

@Injectable({
  providedIn: 'root'  // Ensure this service is available globally
})
export class VisitorRecordService {
  private apiUrl = 'http://localhost:59814/api/pointOfSaleVisit/summary';  // API endpoint

  constructor(private http: HttpClient) {}  // Inject HttpClient here

  getVisitorRecords(): Observable<VisitorRecord[]> {
    return this.http.get<VisitorRecord[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching visitor records:', error);
        return of([]);  // Return an empty array in case of an error
      })
    );
  }
}