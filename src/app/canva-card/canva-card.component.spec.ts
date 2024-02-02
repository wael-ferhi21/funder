import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaCardComponent } from './canva-card.component';

describe('CanvaCardComponent', () => {
  let component: CanvaCardComponent;
  let fixture: ComponentFixture<CanvaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvaCardComponent]
    });
    fixture = TestBed.createComponent(CanvaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
