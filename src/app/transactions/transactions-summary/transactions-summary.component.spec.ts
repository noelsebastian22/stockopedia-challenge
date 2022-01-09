import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {
  MOCK_EDIT_TRANSACTION_PAYLOAD,
  MOCK_TRANSACTIONS_DATA,
} from 'src/mocks/mockTransactions';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';
import { TransactionDto, TransactionTypes } from '../transactions.model';
import { TransactionsService } from '../transactions.service';

import { TransactionsSummaryComponent } from './transactions-summary.component';

describe('TransactionsSummaryComponent', () => {
  let component: TransactionsSummaryComponent;
  let fixture: ComponentFixture<TransactionsSummaryComponent>;
  let transactionsService: TransactionsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
      ],
      declarations: [TransactionsSummaryComponent],
      providers: [
        TransactionsService,
        HttpClientModule,
        { provide: MatDialog, useValue: { open: () => of({ id: 1 }) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSummaryComponent);
    component = fixture.componentInstance;
    transactionsService =
      fixture.debugElement.injector.get(TransactionsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call the get all transactions service', () => {
    spyOn(transactionsService, 'getAllTransaction').and.callFake(() =>
      of(MOCK_TRANSACTIONS_DATA)
    );
    component.getAllTransactions();
    expect(component.transactions).toEqual(MOCK_TRANSACTIONS_DATA.transactions);
  });

  // it('should call the delete function', () => {
  //   const transactionId: number = 12;
  //   spyOn(transactionsService, 'deleteTransaction').and.callFake(() =>
  //     of(null)
  //   );
  //   component.onDelete(transactionId);
  // });
});
