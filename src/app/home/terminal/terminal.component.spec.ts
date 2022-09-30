import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTerminalComponent } from './terminal.component';

describe('TerminalComponent', () => {
  let component: MyTerminalComponent;
  let fixture: ComponentFixture<MyTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTerminalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
