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
    },
    private formBuilder: FormBuilder,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.transactionForm = this.formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      security: [''],
      shares: [''],
      value: ['', Validators.required],
      cashflow: ['', Validators.required],
    });
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
      this.transactionsService.addTransaction(createBody).subscribe((item) => {
        this.dialogRef.close({ success: true });
      });
    }
  }
}
