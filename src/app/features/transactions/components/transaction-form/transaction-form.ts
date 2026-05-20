import { Component, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { CreateTransactionRequest } from '../../models/create-transaction-request';

@Component({
  selector: 'app-transaction-form',
  standalone: false,
  templateUrl: './transaction-form.html',
  styleUrl: './transaction-form.scss',
})
export class TransactionForm {
  @Output() createTransaction = new EventEmitter<CreateTransactionRequest>();
  transactionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createTransactionForm();
  }

  createTransactionForm() {
    this.transactionForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.transactionForm?.invalid) {
      this.transactionForm.markAllAsTouched();
      return;
    }

    this.createTransaction.emit(this.transactionForm.value as CreateTransactionRequest);
    this.transactionForm.reset();
  }
}
