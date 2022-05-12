import { TestBed } from '@angular/core/testing';

import { AngularReactiveFormService } from './angular-reactive-form.service';

describe('AngularReactiveFormService', () => {
  let service: AngularReactiveFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularReactiveFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
