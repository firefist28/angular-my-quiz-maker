import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDifficultyComponent } from './category-difficulty.component';

describe('CategoryDifficultyComponent', () => {
  let component: CategoryDifficultyComponent;
  let fixture: ComponentFixture<CategoryDifficultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDifficultyComponent]
    });
    fixture = TestBed.createComponent(CategoryDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
