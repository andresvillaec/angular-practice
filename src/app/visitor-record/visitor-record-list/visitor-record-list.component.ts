import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorRecord } from "../models/visitor-record.model";
import { VisitorRecordService } from "../services/visitor-record.service";

@Component({
  selector: 'app-visitor-record-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitor-record-list.component.html',
  styleUrl: './visitor-record-list.component.css'
})
export class VisitorRecordListComponent implements OnInit {
  public visitorRecords: VisitorRecord[] = [];

  constructor(private visitorRecordService: VisitorRecordService) {}

   // This will receive a single record as an input from the parent component
  @Input() visitor!: VisitorRecord;
  @Input() index!: number;

  ngOnInit() : void {
    this.loadVisitorRecords();
  }

  loadVisitorRecords(): void {
    this.visitorRecordService.getVisitorRecords().subscribe({
      next: (records: VisitorRecord[]) => {
        this.visitorRecords = records;
      },
      error: (err) => {
        console.error('Error loading records:', err);
      }
    });
  }
}
