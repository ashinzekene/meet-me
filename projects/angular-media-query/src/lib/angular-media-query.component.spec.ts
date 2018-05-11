import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMediaQueryComponent } from './angular-media-query.component';

describe('AngularMediaQueryComponent', () => {
  let component: AngularMediaQueryComponent;
  let fixture: ComponentFixture<AngularMediaQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMediaQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMediaQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
