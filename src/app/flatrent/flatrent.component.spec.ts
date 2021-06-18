import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatRentComponent } from './flatrent.component';

describe('FlatRentComponent', () => {
  let component: FlatRentComponent;
  let fixture: ComponentFixture<FlatRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
