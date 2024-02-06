import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteperComponent } from './steper.component';

describe('SteperComponent', () => {
  let component: SteperComponent;
  let fixture: ComponentFixture<SteperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteperComponent]
    });
    fixture = TestBed.createComponent(SteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
