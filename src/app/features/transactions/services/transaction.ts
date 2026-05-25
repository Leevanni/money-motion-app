import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { CreateTransactionRequest } from '../models/create-transaction-request';
import { UpdateTransactionRequest } from '../models/update-transaction-request';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionUrl = `${environment.apiBaseUrl}/transactions`;

  constructor(private http: HttpClient){}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionUrl, { withCredentials: true });
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.transactionUrl}/${id}`, { withCredentials: true });
  }

  createTransaction(request: CreateTransactionRequest): Observable<Transaction>{
    return this.http.post<Transaction>(`${this.transactionUrl}`, request, { withCredentials: true });
  }

  updateTransaction(id: number, request: UpdateTransactionRequest): Observable<Transaction> {
    return this.http.patch<Transaction>(`${this.transactionUrl}/${id}`, request, { withCredentials: true })
  }
}
