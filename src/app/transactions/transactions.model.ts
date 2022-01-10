export enum TransactionTypes {
  buy = 'buy',
  sell = 'sell',
  deposit = 'deposit',
  withdrawal = 'withdrawal',
}

export interface Transaction {
  cashflow: number;
  date: string;
  id?: number;
  security?: string;
  shares?: number;
  type: TransactionTypes;
  value: number;
}

export interface TransactionDto {
  transactions: Transaction[];
}
