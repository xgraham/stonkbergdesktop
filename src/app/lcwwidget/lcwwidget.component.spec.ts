import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcwwidgetComponent } from './lcwwidget.component';

describe('LcwwidgetComponent', () => {
  let component: LcwwidgetComponent;
  let fixture: ComponentFixture<LcwwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcwwidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LcwwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
