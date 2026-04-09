import { Component } from '@angular/core';
import { TransactionService } from '../../service/transaction';
import { Book } from '../../interface/book';

@Component({
  selector: 'app-transaction',
  standalone: false,
  templateUrl: './transaction.html',
  styleUrl: './transaction.scss',
})
export class Transaction {
  title = 'money-motion-app';
  books: Book[] | undefined;
  loading = true;

  constructor(private transactionService: TransactionService){}

  ngOnInit() {
    this.laodBooks();
  }

  laodBooks() {
    this.transactionService.getBooks().subscribe({
      next: (response) => {
        this.books = response.data;
        this.loading = false;
        console.log('Books:', response)
      },
      error: (err) => {
        console.error('Error loading books', err);
      }
    })
  }
  
}
