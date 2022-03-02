import { TestBed } from '@angular/core/testing';

import { HttpDataStorageService } from './http-data-storage.service';

describe('HttpDataStorageService', () => {
  let service: HttpDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
