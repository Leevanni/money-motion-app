import { TransactionSummary } from "../../transactions/models/transaction-summary";

export interface AccountSummary {
    accountId: number;
    accountName: string;
    accountType: string;
    accountBalance: number;
    recentTransactions: TransactionSummary[];
}