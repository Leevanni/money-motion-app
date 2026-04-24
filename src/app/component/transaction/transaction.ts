import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { Transaction } from '../../interface/transaction';

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

  constructor(private transactionService: TransactionService){}

  ngOnInit() {
    this.laodTransactions();
  }

  laodTransactions() {
    this.transactionService.getTransactions().subscribe({
      next: (response) => {
        this.transactionList = response;
        this.loading = false;
        console.log('Transactions:', response)
      },
      error: (err) => {
        console.error('Error loading transactions', err);
      }
    })
  }
  
}
