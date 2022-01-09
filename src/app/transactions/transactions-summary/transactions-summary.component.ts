import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionDto } from '../transactions.model';
import { TransactionsService } from './../transactions.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';

@Component({
  selector: 'app-transactions-summary',
  templateUrl: './transactions-summary.component.html',
  styleUrls: ['./transactions-summary.component.scss'],
})
export class TransactionsSummaryComponent implements OnInit {
  transactions: Transaction[];
  cumulativeCashflow: number;
  constructor(
    private transactionsService: TransactionsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.transactionsService
      .getAllTransaction()
      .subscribe((item: TransactionDto) => {
        this.transactions = item.transactions;
        this.transactions.sort((a, b) => a.id - b.id);
        this.cumulativeCashflow = this.transactions.reduce((acc, trans) => {
          return (acc += trans.cashflow);
        }, 0);
      });
  }

  editRow(transaction: Transaction) {
    const dialogConfig: MatDialogConfig = {
      data: {
        title: `Edit transaction ${transaction.id}`,
        action: 'edit',
        values: transaction,
      },
    };

    const dialogRef = this.dialog.open(AddTransactionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(({ success }) => {
      if (success) {
        console.log(success);
      }
    });
  }
  addStock() {
    const dialogConfig: MatDialogConfig = {
      data: {
        title: 'Add transactions',
        action: 'add',
      },
    };

    const dialogRef = this.dialog.open(AddTransactionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(({ success }) => {
      if (success) {
        console.log(success);
      }
    });
  }

  /**
   * Function to delete the transaction
   * @param transaction
   */
  onDelete(transactionId: number): void {
    this.transactionsService
      .deleteTransaction(transactionId)
      .subscribe((item) => {
        alert('deleted');
      });
  }
}
