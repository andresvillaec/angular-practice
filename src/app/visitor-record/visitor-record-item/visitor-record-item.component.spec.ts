import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorRecordItemComponent } from './visitor-record-item.component';

describe('VisitorRecordItemComponent', () => {
  let component: VisitorRecordItemComponent;
  let fixture: ComponentFixture<VisitorRecordItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorRecordItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorRecordItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
