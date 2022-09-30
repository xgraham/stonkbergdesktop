import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvwidgetComponent } from './tvwidget.component';

describe('TvwidgetComponent', () => {

  let component: TvwidgetComponent;
  let fixture: ComponentFixture<TvwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvwidgetComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TvwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
