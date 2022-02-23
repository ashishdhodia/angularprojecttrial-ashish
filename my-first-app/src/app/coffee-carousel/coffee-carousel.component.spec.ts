import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeCarouselComponent } from './coffee-carousel.component';

describe('CoffeeCarouselComponent', () => {
  let component: CoffeeCarouselComponent;
  let fixture: ComponentFixture<CoffeeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
