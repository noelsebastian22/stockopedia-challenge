import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction, TransactionDto } from './transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getAllTransaction(): Observable<TransactionDto> {
    return this.http.get<TransactionDto>('/transactions');
  }

  addTransaction(createBody: Transaction) {
    console.log(createBody);
    return this.http.post<Transaction>('/transactions', createBody);
  }
}
