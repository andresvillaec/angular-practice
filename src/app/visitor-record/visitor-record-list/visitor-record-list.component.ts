import { Component } from '@angular/core';
import { VisitorRecordItemComponent } from "../visitor-record-item/visitor-record-item.component";

@Component({
  selector: 'app-visitor-record-list',
  standalone: true,
  imports: [VisitorRecordItemComponent],
  templateUrl: './visitor-record-list.component.html',
  styleUrl: './visitor-record-list.component.css'
})
export class VisitorRecordListComponent {

}
