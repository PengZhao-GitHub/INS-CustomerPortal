import { TestBed } from '@angular/core/testing';

import { ProductLinesService } from './product-lines.service';

describe('ProductLinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductLinesService = TestBed.get(ProductLinesService);
    expect(service).toBeTruthy();
  });
});
