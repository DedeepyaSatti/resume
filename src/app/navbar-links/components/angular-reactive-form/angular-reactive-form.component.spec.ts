import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveFormComponent } from './angular-reactive-form.component';

describe('AngularReactiveFormComponent', () => {
  let component: AngularReactiveFormComponent;
  let fixture: ComponentFixture<AngularReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
