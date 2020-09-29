import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDriverComponent } from './reg-driver.component';

describe('RegDriverComponent', () => {
  let component: RegDriverComponent;
  let fixture: ComponentFixture<RegDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
