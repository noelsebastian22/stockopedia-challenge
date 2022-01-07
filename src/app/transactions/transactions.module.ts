import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsSummaryComponent } from './transactions-summary/transactions-summary.component';
import { RouterModule } from '@angular/router';
import { TransactionRoutes } from './transaction.routing';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransactionsSummaryComponent, AddTransactionComponent],
  imports: [
    RouterModule.forChild(TransactionRoutes),
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TransactionsModule {}
