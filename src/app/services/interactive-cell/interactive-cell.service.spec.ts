import { TestBed } from '@angular/core/testing';

import { InteractiveCellService } from './interactive-cell.service';

describe('InteractiveCellService', () => {
  let service: InteractiveCellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractiveCellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
