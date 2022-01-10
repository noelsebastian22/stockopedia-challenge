import {
  Transaction,
  TransactionDto,
  TransactionTypes,
} from 'src/app/transactions/transactions.model';

export const MOCK_TRANSACTIONS_DATA: TransactionDto = {
  transactions: [
    {
      cashflow: 32000,
      date: '2019-01-01T09:45:00.000Z',
      id: 5,
      type: TransactionTypes.deposit,
      value: 32000,
    },
    {
      cashflow: -5005,
      date: '2019-01-02T09:34:02.000Z',
      id: 17,
      security: "Carr's",
      shares: 317,
      type: TransactionTypes.buy,
      value: 5005,
    },
  ],
};

export const MOCK_SAVE_TRANSACTION_DATA: Transaction = {
  cashflow: 345345,
  date: '2021-12-30T00:00:00.000Z',
  id: 1065,
  security: 'fhgt',
  shares: 435345,
  type: TransactionTypes.deposit,
  value: 34535,
};

export const MOCK_SAVE_TRANSACTION_PAYLOAD: Transaction = {
  cashflow: 345345,
  date: '2021-12-30T00:00:00.000Z',
  type: TransactionTypes.deposit,
  value: 34535,
  shares: 435345,
  security: 'fhgt',
};

export const MOCK_EDIT_TRANSACTION_PAYLOAD: Transaction = {
  cashflow: 345345,
  date: '2021-12-30T00:00:00.000Z',
  id: 1065,
  security: 'fhgt',
  shares: 435345,
  type: TransactionTypes.deposit,
  value: 34535,
};
