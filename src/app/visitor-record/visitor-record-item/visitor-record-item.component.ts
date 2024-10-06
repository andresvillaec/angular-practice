import { Component, Input } from '@angular/core';
import { VisitorRecord } from '../models/visitor-record.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-visitor-record-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visitor-record-item.component.html',
  styleUrl: './visitor-record-item.component.css'
})
export class VisitorRecordItemComponent {
 // This will receive a single record as an input from the parent component
 @Input() visitor!: VisitorRecord;
 @Input() index!: number;

 constructor() { }
}
