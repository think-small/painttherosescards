import { TestBed } from '@angular/core/testing';

import { ToggleReadonlyService } from './toggle-readonly.service';

describe('ToggleReadonlyService', () => {
  let service: ToggleReadonlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleReadonlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
