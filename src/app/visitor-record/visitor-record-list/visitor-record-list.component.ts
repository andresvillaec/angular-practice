import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorRecordItemComponent } from "../visitor-record-item/visitor-record-item.component";
import { VisitorRecord } from "../models/visitor-record.model";
import { VisitorRecordService } from "../services/visitor-record.service";

@Component({
  selector: 'app-visitor-record-list',
  standalone: true,
  imports: [CommonModule, VisitorRecordItemComponent],
  templateUrl: './visitor-record-list.component.html',
  styleUrl: './visitor-record-list.component.css'
})
export class VisitorRecordListComponent {
  public visitorRecords: VisitorRecord[] = [];

   // This will receive a single record as an input from the parent component
  @Input() visitor!: VisitorRecord;
  @Input() index!: number;

  constructor(private VisitorRecordService : VisitorRecordService ) {

  }

  ngOnInit() : void {
    this.loadVisitorRecords();
  }

  loadVisitorRecords(): void {
    this.VisitorRecordService.getVisitorRecords()
    .subscribe(records => this.visitorRecords = records);
  }
}
