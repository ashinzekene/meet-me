import { TestBed, inject } from '@angular/core/testing';

import { AngularMediaQueryService } from './angular-media-query.service';

describe('AngularMediaQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularMediaQueryService]
    });
  });

  it('should be created', inject([AngularMediaQueryService], (service: AngularMediaQueryService) => {
    expect(service).toBeTruthy();
  }));
});
