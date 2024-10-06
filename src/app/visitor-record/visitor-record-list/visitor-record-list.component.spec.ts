import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorRecordListComponent } from './visitor-record-list.component';

describe('VisitorRecordListComponent', () => {
  let component: VisitorRecordListComponent;
  let fixture: ComponentFixture<VisitorRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorRecordListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
