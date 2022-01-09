import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TransactionDto, TransactionTypes } from '../transactions.model';
import { TransactionsService } from '../transactions.service';

import { TransactionsSummaryComponent } from './transactions-summary.component';

describe('TransactionsSummaryComponent', () => {
  let component: TransactionsSummaryComponent;
  let fixture: ComponentFixture<TransactionsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [TransactionsSummaryComponent],
      providers: [TransactionsService, HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should call the get all transactions service', () => {
    const mockTransactionsData: TransactionDto = {
      transactions: [
        {
          cashflow: 32000,
          date: '2019-01-01T09:45:00.000Z',
          id: 5,
          type: TransactionTypes.deposit,
          value: 32000,
        },
        {
          cashflow: -5005,
          date: '2019-01-02T09:34:02.000Z',
          id: 17,
          security: "Carr's",
          shares: 317,
          type: TransactionTypes.buy,
          value: 5005,
        },
      ],
    };
    const fixture = TestBed.createComponent(TransactionsSummaryComponent);
    const component = fixture.debugElement.componentInstance;
    const transactionsService =
      fixture.debugElement.injector.get(TransactionsService);

    const stub = spyOn(transactionsService, 'getAllTransaction').and.callFake(
      () => {
        return of(mockTransactionsData).pipe(delay(300));
      }
    );
    // component.
    expect(component.transactions).toEqual(mockTransactionsData);
  });
});
