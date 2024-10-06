import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout/layout.component';import {RouterOutlet} from '@angular/router';
import {VisitorRecordListComponent} from './visitor-record/visitor-record-list/visitor-record-list.component';
import { VisitorRecordItemComponent } from './visitor-record/visitor-record-item/visitor-record-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LayoutComponent, VisitorRecordListComponent, VisitorRecordItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Practice';
}