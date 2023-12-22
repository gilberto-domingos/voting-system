import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumChboxComponent } from './sum-chbox.component';

describe('SumChboxComponent', () => {
  let component: SumChboxComponent;
  let fixture: ComponentFixture<SumChboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumChboxComponent]
    });
    fixture = TestBed.createComponent(SumChboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
