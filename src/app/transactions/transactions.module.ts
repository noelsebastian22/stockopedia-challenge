import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsSummaryComponent } from './transactions-summary/transactions-summary.component';
import { RouterModule } from '@angular/router';
import { TransactionRoutes } from './transaction.routing';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    TransactionsSummaryComponent,
    AddTransactionComponent,
    DeleteModalComponent,
  ],
  imports: [
    RouterModule.forChild(TransactionRoutes),
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class TransactionsModule {}
