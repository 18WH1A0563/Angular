import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeallocateDriversComponent } from './deallocate-drivers.component';

describe('DeallocateDriversComponent', () => {
  let component: DeallocateDriversComponent;
  let fixture: ComponentFixture<DeallocateDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeallocateDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeallocateDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
