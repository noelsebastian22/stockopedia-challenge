import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
  constructor(
    private transactionsService: TransactionsService,
    private dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { transactionId: number }
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.transactionsService
      .deleteTransaction(this.data.transactionId)
      .subscribe((item) => {
        this.dialogRef.close({ success: true });
      });
  }
}
