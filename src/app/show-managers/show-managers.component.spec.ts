import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManagersComponent } from './show-managers.component';

describe('ShowManagersComponent', () => {
  let component: ShowManagersComponent;
  let fixture: ComponentFixture<ShowManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
