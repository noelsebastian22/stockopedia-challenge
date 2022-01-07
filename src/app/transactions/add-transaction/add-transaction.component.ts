import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transactions';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  transactionForm: FormGroup;
  constructor(
    private dialogRef: MatDialogRef<AddTransactionComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      action: string;
      values?: Transaction;
    },
    private formBuilder: FormBuilder,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    switch (this.data.action) {
      case 'add': {
        this.transactionForm = this.formBuilder.group({
          date: ['', Validators.required],
          type: ['', Validators.required],
          security: [''],
          shares: [''],
          value: ['', Validators.required],
          cashflow: ['', Validators.required],
        });
        break;
      }
      case 'edit': {
        const transVal = this.data.values;
        // const date = this.getDate(transVal.date);
        const date = '2019-01-01';
        this.transactionForm = this.formBuilder.group({
          date: [date, Validators.required],
          type: [transVal.type, Validators.required],
          security: [transVal.security],
          shares: [transVal.shares],
          value: [transVal.value, Validators.required],
          cashflow: [transVal.cashflow, Validators.required],
        });
        break;
      }
    }
  }

  private getDate(isoDate: string): string {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    const finalDate = `${year}-${month}-${day}`;
    return finalDate;
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const formValue = this.transactionForm.value;
      const date = new Date(Date.parse(formValue.date)).toISOString();
      const createBody: Transaction = {
        cashflow: formValue.cashflow,
        date,
        type: formValue.type,
        value: formValue.value,
      };
      formValue.shares !== '' && (createBody.shares = formValue.shares);
      formValue.security !== '' && (createBody.security = formValue.security);
      this.data.action === 'edit' && (createBody.id = this.data.values.id);
      const actionFunc = this.getActionFunction(this.data.action).bind(
        this.transactionsService
      );
      actionFunc(createBody).subscribe((item) => {
        this.dialogRef.close({ success: true });
      });
    }
  }

  private getActionFunction(action: string) {
    if (action === 'add') {
      return this.transactionsService.addTransaction;
    }
    if (action === 'edit') {
      return this.transactionsService.modifyTransaction;
    }
  }
}
