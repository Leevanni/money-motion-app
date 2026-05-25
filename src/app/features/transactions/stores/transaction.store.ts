import { computed, inject, Injectable, signal } from '@angular/core';
import { Transaction } from '../models/transaction';
import { CreateTransactionRequest } from '../models/create-transaction-request';
import { TransactionService } from '../services/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionStore {
  private readonly transactionService = inject(TransactionService);

  private readonly transactionsSignal = signal<Transaction[]>([]);
  private readonly loadingSignal = signal(false);
  private readonly errorSignal = signal<string | null>(null);

  readonly transactions = this.transactionsSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();
  readonly error = this.errorSignal.asReadonly();

  readonly hasTransactions = computed(() => this.transactions().length > 0);

  loadTransactions(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.transactionService.getTransactions().subscribe({
      next: (transactions) => {
        this.transactionsSignal.set(transactions);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        console.error('Error loading transactions', err);
        this.errorSignal.set('Unable to load transactions right now');
        this.loadingSignal.set(false);
      },
    });
  }

  createTransaction(request: CreateTransactionRequest): void {
    this.errorSignal.set(null);

    this.transactionService.createTransaction(request).subscribe({
      next: () => this.loadTransactions(),
      error: (err) => {
        console.error('Error creating transaction', err);
        this.errorSignal.set('Unable to create transaction right now');
      },
    });
  }
}