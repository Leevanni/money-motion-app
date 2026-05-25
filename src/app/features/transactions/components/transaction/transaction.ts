import { Component, inject } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';
import { CreateTransactionRequest } from '../../models/create-transaction-request';
import { TransactionStore } from '../../stores/transaction.store';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.html',
  styleUrl: './transaction.scss',
})
export class TransactionComponent {
  title = 'money-motion-app';
  
  readonly transactionStore = inject(TransactionStore)

  ngOnInit() {
    this.transactionStore.loadTransactions();
  }

  onCreateTransaction(transaction: CreateTransactionRequest) {
    this.transactionStore.createTransaction(transaction);
  }
}