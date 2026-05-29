import { TransactionType } from "../enums/transaction-type";

export interface TransactionSummary {
    transactionId: number;
    description: string;
    amount: number;
    category: string;
    transactionType: TransactionType;
    createdAt: string;
}
