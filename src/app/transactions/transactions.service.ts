import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionDto } from './transactions';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  getAllTransaction(): Observable<TransactionDto> {
    return this.http.get<TransactionDto>('/transactions');
  }
}
