import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionDto } from '../transactions.model';
import { TransactionsService } from './../transactions.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

@Component({
  selector: 'app-transactions-summary',
  templateUrl: './transactions-summary.component.html',
  styleUrls: ['./transactions-summary.component.scss'],
})
export class TransactionsSummaryComponent implements OnInit {
  transactions: Transaction[];
  cumulativeCashflow: number;

  deleteAlert: boolean;
  modifyAlert: boolean;
  addAlert: boolean;

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
        this.modifyAlert = true;
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
        this.addAlert = true;
      }
    });
  }

  /**
   * Function to delete the transaction
   * @param transaction
   */
  onDelete(transactionId: number): void {
    const dialogConfig: MatDialogConfig = {
      height: '150px',
      data: {
        transactionId,
      },
    };
    const dialogRef = this.dialog.open(DeleteModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(({ success }) => {
      if (success) {
        this.deleteAlert = true;
      }
    });
  }

  hideAlert(action: string) {
    switch (action) {
      case 'add':
        this.addAlert = false;
        break;
      case 'modify':
        this.modifyAlert = false;
        break;
      case 'delete':
        this.deleteAlert = false;
    }
  }
}
