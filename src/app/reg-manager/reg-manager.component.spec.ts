import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegManagerComponent } from './reg-manager.component';

describe('RegManagerComponent', () => {
  let component: RegManagerComponent;
  let fixture: ComponentFixture<RegManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
