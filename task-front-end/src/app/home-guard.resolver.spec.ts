import { TestBed } from '@angular/core/testing';

import { HomeGuardResolver } from './home-guard.resolver';

describe('HomeGuardResolver', () => {
  let resolver: HomeGuardResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HomeGuardResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
