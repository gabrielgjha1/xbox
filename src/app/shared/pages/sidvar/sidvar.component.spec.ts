import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidvarComponent } from './sidvar.component';

describe('SidvarComponent', () => {
  let component: SidvarComponent;
  let fixture: ComponentFixture<SidvarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidvarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
