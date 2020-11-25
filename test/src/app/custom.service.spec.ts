/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomService } from './custom.service';

describe('Service: Custom', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomService]
    });
  });

  it('should ...', inject([CustomService], (service: CustomService) => {
    expect(service).toBeTruthy();
  }));
});
