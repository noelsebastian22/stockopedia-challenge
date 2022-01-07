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

  /**
   * Function to get all the transactions
   * @returns TransactionsDto
   */
  getAllTransaction(): Observable<TransactionDto> {
    return this.http.get<TransactionDto>('/transactions');
  }

  /**
   * Function to perform the API call to add the transaction
   * @param createBody
   * @returns
   */
  addTransaction(createBody: Transaction) {
    return this.http.post<Transaction>('/transactions', createBody);
  }

  /**
   * Function to perform the API call to modify the transaction
   * @param createBody
   * @returns
   */
  modifyTransaction(createBody: Transaction) {
    return this.http.put<Transaction>(
      `/transactions/${createBody.id}`,
      createBody
    );
  }

  /**
   * Function to perform the API call to delete the transaction
   * @param transactionId
   */
  deleteTransaction(transactionId: number) {
    return this.http.delete(`/transactions/${transactionId}`);
  }
}
