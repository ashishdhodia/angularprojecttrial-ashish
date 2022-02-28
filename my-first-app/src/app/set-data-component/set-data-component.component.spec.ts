import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDataComponentComponent } from './set-data-component.component';

describe('SetDataComponentComponent', () => {
  let component: SetDataComponentComponent;
  let fixture: ComponentFixture<SetDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetDataComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
