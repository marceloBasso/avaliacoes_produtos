import { TestBed } from '@angular/core/testing';

import { ProductEvaluationsService } from './product-evaluations.service';

describe('ProductInterestsService', () => {
  let service: ProductEvaluationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEvaluationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
