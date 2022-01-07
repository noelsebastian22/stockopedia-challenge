import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsSummaryComponent } from './transactions-summary/transactions-summary.component';
import { RouterModule } from '@angular/router';
import { TransactionRoutes } from './transaction.routing';

@NgModule({
  declarations: [TransactionsSummaryComponent],
  imports: [RouterModule.forChild(TransactionRoutes), CommonModule],
})
export class TransactionsModule {}
