import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TransactionsService } from './transactions.service';
import { HttpClient } from '@angular/common/http';
import {
  Transaction,
  TransactionDto,
  TransactionTypes,
} from './transactions.model';

describe('TransactionsService', () => {
  let transactionService: TransactionsService;
  let httpController: HttpTestingController;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionsService],
    });
    transactionService = TestBed.inject(TransactionsService);
    httpController = TestBed.inject(HttpTestingController);
    http = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(transactionService).toBeDefined();
  });

  it('get transactions Api', () => {
    const mockTransactionsData: TransactionDto = {
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
    transactionService
      .getAllTransaction()
      .subscribe((data) => expect(data).toEqual(mockTransactionsData));

    const req = httpController.expectOne('/transactions');
    expect(req.request.method).toEqual('GET');
    req.flush(mockTransactionsData);
  });
  it('call save transactions Api', () => {
    const mockTransactionsData: Transaction = {
      cashflow: 345345,
      date: '2021-12-30T00:00:00.000Z',
      id: 1065,
      security: 'fhgt',
      shares: 435345,
      type: TransactionTypes.deposit,
      value: 34535,
    };

    const payLoad: Transaction = {
      cashflow: 345345,
      date: '2021-12-30T00:00:00.000Z',
      type: TransactionTypes.deposit,
      value: 34535,
      shares: 435345,
      security: 'fhgt',
    };
    transactionService
      .addTransaction(payLoad)
      .subscribe((data) => expect(data).toEqual(mockTransactionsData));

    const req = httpController.expectOne('/transactions');
    expect(req.request.method).toEqual('POST');
    req.flush(mockTransactionsData);
  });

  it('call delete transactions Api', () => {
    const transactionId: number = 12;
    transactionService
      .deleteTransaction(transactionId)
      .subscribe((data) => expect(data).toEqual(null));

    const req = httpController.expectOne('/transactions/12');
    expect(req.request.method).toEqual('DELETE');
  });

  it('call modify transactions Api', () => {
    const mockTransactionsData: Transaction = {
      cashflow: 345345,
      date: '2021-12-30T00:00:00.000Z',
      id: 1065,
      security: 'fhgt',
      shares: 435345,
      type: TransactionTypes.deposit,
      value: 34535,
    };

    const payLoad: Transaction = {
      cashflow: 345345,
      date: '2021-12-30T00:00:00.000Z',
      type: TransactionTypes.deposit,
      value: 34535,
      id: 1065,
      shares: 435345,
      security: 'fhgt',
    };
    transactionService
      .modifyTransaction(payLoad)
      .subscribe((data) => expect(data).toEqual(mockTransactionsData));

    const req = httpController.expectOne('/transactions/1065');
    expect(req.request.method).toEqual('PUT');
    req.flush(mockTransactionsData);
  });

  // it('should get all the books and return an array fo books', ()=> {
  //   service.getAllTransaction().subscribe((res) => {
  //     expect(res).toEqual(mockBookArray);
  // })
});
