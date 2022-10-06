import { TestBed } from '@angular/core/testing';

import { NavEstraServiceService } from './nav-estra-service.service';

describe('NavEstraServiceService', () => {
  let service: NavEstraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavEstraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
