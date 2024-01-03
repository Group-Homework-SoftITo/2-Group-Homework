import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { testCanChildGuard } from './test-can-child.guard';

describe('testCanChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testCanChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
