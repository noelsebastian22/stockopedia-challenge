import { Routes } from '@angular/router';
import { TransactionsSummaryComponent } from './transactions-summary/transactions-summary.component';

export const TransactionRoutes: Routes = [
  {
    path: '',
    component: TransactionsSummaryComponent,
  },
];
