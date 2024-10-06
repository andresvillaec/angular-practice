import { Injectable } from '@angular/core';
import { VisitorRecord } from '../models/visitor-record.model';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VisitorRecordService {
  constructor() { }

  // Mock data for visitor records
  private visitorRecords: VisitorRecord[] = [
    {
      pointOfSaleName: 'POS 001',
      visitTypeDescription: 'Regular',
      startDate: new Date('2023-10-01T10:00:00'),
      endDate: new Date('2023-10-01T12:00:00'),
    },
    {
      pointOfSaleName: 'POS 002',
      visitTypeDescription: 'VIP',
      startDate: new Date('2023-10-02T15:00:00'),
      endDate: new Date('2023-10-02T16:30:00'),
    },
    {
      pointOfSaleName: 'POS 003',
      visitTypeDescription: 'Regular',
      startDate: new Date('2023-10-03T13:30:00'),
      endDate: new Date('2023-10-03T14:15:00'),
    },
  ];

  getVisitorRecords() : Observable<VisitorRecord[]> {
    return of(this.visitorRecords);
  }
}
