import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionDto } from '../transactions';
import { TransactionsService } from './../transactions.service';

@Component({
  selector: 'app-transactions-summary',
  templateUrl: './transactions-summary.component.html',
  styleUrls: ['./transactions-summary.component.scss'],
})
export class TransactionsSummaryComponent implements OnInit {
  transactions: Transaction[];
  cumulativeCashflow: number;
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionsService
      .getAllTransaction()
      .subscribe((item: TransactionDto) => {
        // console.log(item);
        this.transactions = item.transactions;
        this.transactions.sort((a, b) => a.id - b.id);
        this.cumulativeCashflow = this.transactions.reduce((acc, trans) => {
          return (acc += trans.cashflow);
        }, 0);
      });
  }
}
