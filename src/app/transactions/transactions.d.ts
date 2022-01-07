export enum TransactionTypes {
  buy = 'buy',
  sell = 'sell',
  deposit = 'deposit',
  withdrawal = 'withdrawal',
}

export interface Transaction {
  cashflow: number;
  date: Date;
  id: number;
  security?: string;
  shares?: number;
  type: 'deposit';
  value: number;
}

export interface TransactionDto {
  transactions: Transaction[];
}
