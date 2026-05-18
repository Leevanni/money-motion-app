import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { CreateTransactionRequest } from '../models/create-transaction-request';
import { UpdateTransactionRequest } from '../models/update-transaction-request';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionUrl = 'http://localhost:8080/api/transactions';

  constructor(private http: HttpClient){}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl);
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.transactionUrl}/${id}`);
  }

  createTransaction(id: number, request: CreateTransactionRequest): Observable<Transaction>{
    return this.http.post<Transaction>(`${this.transactionUrl}/${id}`, request);
  }

  updateTransaction(id: number, request: UpdateTransactionRequest): Observable<Transaction> {
    return this.http.patch<Transaction>(`${this.transactionUrl}/${id}`, request)
  }
}
