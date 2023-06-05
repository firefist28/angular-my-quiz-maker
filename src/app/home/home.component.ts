import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { QuizQuestion } from '../models/quiz-question.model';
import { CategoriesService } from '../services/categories/categories.service';
import { QuizService } from '../services/quiz/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  quizQuestions: QuizQuestion[] = [];
  quizLoading: boolean = false;
  categoryLoading: boolean = false;

  constructor(
    private categoriesService: CategoriesService,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryLoading = true;
    this.categoriesService.fetchCategories().subscribe(
      (response) => {
        this.categories = response;
        this.categoryLoading = false;
      },
      (error) => {
        console.error('Error fetching categories:', error);
        this.categoryLoading = false;
      }
    );
  }

  createQuiz(categoryAndDifficult: { category: number; difficult: string }) {
    if (
      categoryAndDifficult.category === 0 ||
      categoryAndDifficult.difficult === ''
    ) {
      // Show error message or perform any other desired action
      console.error(
        'Please select a category and difficulty before creating a quiz.'
      );
      return;
    }

    this.quizLoading = true;
    this.quizService
      .fetchQuizQuestions(
        5,
        categoryAndDifficult.category,
        categoryAndDifficult.difficult
      )
      .subscribe(
        (response) => {
          this.quizQuestions = response.map((question) => ({
            ...question,
            selectedAnswer: '',
          }));
          this.quizLoading = false;
        },
        (error) => {
          console.error('Error fetching quiz questions:', error);
          this.quizLoading = false;
        }
      );
  }

  selectAnswer(question: QuizQuestion, answer: string) {
    question.selectedAnswer = answer;
  }
}
