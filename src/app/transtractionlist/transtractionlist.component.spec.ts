import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranstractionlistComponent } from './transtractionlist.component';

describe('TranstractionlistComponent', () => {
  let component: TranstractionlistComponent;
  let fixture: ComponentFixture<TranstractionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranstractionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranstractionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
