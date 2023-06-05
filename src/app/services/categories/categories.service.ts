import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category, CategoryResponse } from '../../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'https://opentdb.com/api_category.php';

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<Category[]> {
    return this.http.get<CategoryResponse>(this.apiUrl).pipe(
      map(response => response.trivia_categories)
    );
  }
}
