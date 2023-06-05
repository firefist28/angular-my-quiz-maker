import { Injectable } from '@angular/core';
import { QuizQuestion } from '../../models/quiz-question.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsMessagingQueueService {

  quizQuestions: QuizQuestion[] = [];

  constructor() {

  }

  saveQuestions(quizQuestions: QuizQuestion[]) {
    this.quizQuestions = quizQuestions;
  }

  retrieveQuestions() {
    return this.quizQuestions;
  }
}
