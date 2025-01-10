import { TestBed } from '@angular/core/testing';

import { SlideshowLibService } from './slideshow-lib.service';

describe('SlideshowLibService', () => {
  let service: SlideshowLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideshowLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
