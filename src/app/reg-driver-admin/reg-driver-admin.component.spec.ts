import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDriverAdminComponent } from './reg-driver-admin.component';

describe('RegDriverAdminComponent', () => {
  let component: RegDriverAdminComponent;
  let fixture: ComponentFixture<RegDriverAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegDriverAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDriverAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
