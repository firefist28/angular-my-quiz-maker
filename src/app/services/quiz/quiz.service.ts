import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuizQuestion, QuizQuestionResponse } from '../../models/quiz-question.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) { }

  fetchQuizQuestions(amount: number, category: number, difficulty: string): Observable<QuizQuestion[]> {
    const url = `${this.apiUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get<QuizQuestionResponse>(url).pipe(
      map(response => {
        return response.results.map(question => {
          const answers = [question.correct_answer, ...question.incorrect_answers];
          const shuffledAnswers = this.shuffleArray(answers);
          return {
            ...question,
            answers: shuffledAnswers
          };
        });
      })
    );
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
