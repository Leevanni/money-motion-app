import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction';
import { Transaction } from '../../models/transaction';
import { CreateTransactionRequest } from '../../models/create-transaction-request';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.html',
  styleUrl: './transaction.scss',
})
export class TransactionComponent {
  title = 'money-motion-app';
  transactionList: Transaction[] | undefined;
  loading = true;
  errorMessage = '';

  constructor(private transactionService: TransactionService){}

  ngOnInit() {
    this.loadTransactions();
  }

  loadTransactions() {
    this.loading = true;
    this.errorMessage = '';

    this.transactionService.getTransactions().subscribe({
      next: (response) => {
        this.transactionList = response;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading transactions', err);
        this.errorMessage = 'Unable to load transactions right now';
        this.loading = false;
      }
    })
  } 

  onCreateTransaction(transaction: CreateTransactionRequest) {
    this.transactionService.createTransaction(transaction).subscribe({
      next: () => this.loadTransactions(),
      error: (err) => {
        console.error('Error creating transaction', err);
        this.errorMessage = 'Unable to create transaction right now';
      }
    });
  }

}