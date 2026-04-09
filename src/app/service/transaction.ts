import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';
import { BookResponse } from '../interface/book-response';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private apiUrl = 'https://stephen-king-api.onrender.com/api/books';

  constructor(private http: HttpClient){}
  
  getBooks(): Observable<BookResponse> {
    return this.http.get<BookResponse>(this.apiUrl);
  }
}
