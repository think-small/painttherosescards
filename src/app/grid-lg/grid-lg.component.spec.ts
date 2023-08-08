import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLgComponent } from './grid-lg.component';

describe('GridLgComponent', () => {
  let component: GridLgComponent;
  let fixture: ComponentFixture<GridLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
