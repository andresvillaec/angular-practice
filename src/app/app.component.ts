import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {LayoutComponent} from './layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Practice';
}