import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthComponent } from './sixth.component';

describe('SixthComponent', () => {
  let component: SixthComponent;
  let fixture: ComponentFixture<SixthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthComponent]
    });
    fixture = TestBed.createComponent(SixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
