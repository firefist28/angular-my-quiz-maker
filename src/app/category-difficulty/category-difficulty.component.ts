import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../models/category.model';


@Component({
  selector: 'app-category-difficulty',
  templateUrl: './category-difficulty.component.html',
  styleUrls: ['./category-difficulty.component.css']
})
export class CategoryDifficultyComponent {
  @Input() categories!: Category[];
  categoryAndDifficult: {
    category: number;
    difficult: string;
  } = { category: 0, difficult: "" };

  @Output() createQuizClicked: EventEmitter<{category: number, difficult: string}> = new EventEmitter<{category: number, difficult: string} >();

  selectedCategory: number = 0;
  selectedDifficulty: string = '';

  onCreateQuizClicked() {
    this.categoryAndDifficult = { category:this.selectedCategory, difficult:this.selectedDifficulty };
    this.createQuizClicked.emit(this.categoryAndDifficult);
  }

  categoryAndDiffucltySelected() {
    if (this.selectedCategory === 0 || this.selectedDifficulty === '') {
      return true;
    }
    return false;
  }
}
