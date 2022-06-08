import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstractiondetailsComponent } from './transtractiondetails.component';

describe('TranstractiondetailsComponent', () => {
  let component: TranstractiondetailsComponent;
  let fixture: ComponentFixture<TranstractiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranstractiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstractiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
