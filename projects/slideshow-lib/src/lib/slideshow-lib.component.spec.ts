import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowLibComponent } from './slideshow-lib.component';

describe('SlideshowLibComponent', () => {
  let component: SlideshowLibComponent;
  let fixture: ComponentFixture<SlideshowLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideshowLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideshowLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
