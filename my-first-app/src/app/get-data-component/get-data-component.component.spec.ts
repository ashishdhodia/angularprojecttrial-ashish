import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataComponentComponent } from './get-data-component.component';

describe('GetDataComponentComponent', () => {
  let component: GetDataComponentComponent;
  let fixture: ComponentFixture<GetDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
