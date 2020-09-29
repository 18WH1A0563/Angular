import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllCustomersComponent } from './show-all-customers.component';

describe('ShowAllCustomersComponent', () => {
  let component: ShowAllCustomersComponent;
  let fixture: ComponentFixture<ShowAllCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
