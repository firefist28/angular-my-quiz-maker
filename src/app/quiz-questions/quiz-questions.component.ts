import { Component, Input } from '@angular/core';
import { QuizQuestion } from '../models/quiz-question.model';
import { ResultsMessagingQueueService } from '../services/quiz/results-messaging-queue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent {
  @Input() quizQuestions: QuizQuestion[] = [];

  constructor(private router: Router, private resultsMessagingQueueService: ResultsMessagingQueueService) { }

  submitQuiz() {
    const unansweredQuestions = this.quizQuestions.filter(question => !question.selectedAnswer);
    
    if (unansweredQuestions.length === 0) {
      this.resultsMessagingQueueService.saveQuestions(this.quizQuestions);
      this.router.navigate(['/results']);
    } else {
      alert('Please answer all questions before submitting the quiz.');
    }
  }


  selectAnswer(question: QuizQuestion, answer: string) {
    question.selectedAnswer = answer;
  }

  unattemptedQuestionsExist(): boolean {
    return this.quizQuestions.some(question => !question.selectedAnswer);
  }

}

