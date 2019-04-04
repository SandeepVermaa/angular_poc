import { TestBed } from '@angular/core/testing';

import { UpdateDataService } from './update-data.service';

describe('UpdateDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateDataService = TestBed.get(UpdateDataService);
    expect(service).toBeTruthy();
  });
});
