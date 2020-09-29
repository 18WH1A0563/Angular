import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllDriversComponent } from './show-all-drivers.component';

describe('ShowAllDriversComponent', () => {
  let component: ShowAllDriversComponent;
  let fixture: ComponentFixture<ShowAllDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
