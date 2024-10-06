import { Routes } from '@angular/router';

import { VisitorRecordListComponent } from "./visitor-record/visitor-record-list/visitor-record-list.component";

export const routes: Routes = [
  {
    path: 'visitors',
    title: 'Registro de visitas',
    component: VisitorRecordListComponent,
  },
];
