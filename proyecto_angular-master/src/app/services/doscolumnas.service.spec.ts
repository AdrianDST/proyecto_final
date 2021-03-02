import { TestBed } from '@angular/core/testing';

import { DoscolumnasService } from './doscolumnas.service';

describe('DoscolumnasService', () => {
  let service: DoscolumnasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoscolumnasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
