import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizQuestion } from '../models/quiz-question.model';
import { ResultsMessagingQueueService } from '../services/quiz/results-messaging-queue.service';

interface ResultsData {
  quizQuestions: QuizQuestion[];
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  quizQuestions: QuizQuestion[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private resultsMessagingQueueService: ResultsMessagingQueueService) { }

  ngOnInit() {
    this.quizQuestions = this.resultsMessagingQueueService.retrieveQuestions();
  }

  calculateScore(): number {
    const correctAnswers = this.quizQuestions.filter(question => question.selectedAnswer === question.correct_answer);
    return correctAnswers.length;
  }

  getScoreBarStyle() {
    const score = this.calculateScore();

    let barColor: string;
    if (score <= 1) {
      barColor = 'red';
    } else if (score <= 3) {
      barColor = 'yellow';
    } else {
      barColor = 'green';
    }

    return {
      'background-color': barColor
    };
  }


  goToNewQuizCreation() {
    this.router.navigate(['/new-quiz']);
  }

}
