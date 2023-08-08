import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSmComponent } from './grid-sm.component';

describe('GridSmComponent', () => {
  let component: GridSmComponent;
  let fixture: ComponentFixture<GridSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
