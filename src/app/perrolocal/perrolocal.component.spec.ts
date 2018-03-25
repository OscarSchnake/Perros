import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroLocalComponent } from './perrolocal.component';

describe('PerroLocalComponent', () => {
  let component: PerroLocalComponent;
  let fixture: ComponentFixture<PerroLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerroLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerroLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
