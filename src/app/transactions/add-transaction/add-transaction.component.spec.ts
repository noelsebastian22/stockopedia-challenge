import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { AddTransactionComponent } from './add-transaction.component';

describe('AddTransactionComponent', () => {
  let component: AddTransactionComponent;
  let fixture: ComponentFixture<AddTransactionComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let modalData = {
    title: 'Add transactions',
    action: 'add',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTransactionComponent],
      imports: [ReactiveFormsModule, MatDialogModule, HttpClientModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: modalData },
        { provide: FormBuilder, useValue: formBuilder },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionComponent);
    component = fixture.componentInstance;
    component.transactionForm = formBuilder.group({
      date: ['', Validators.required],
      type: ['', Validators.required],
      security: [''],
      shares: [''],
      value: ['', Validators.required],
      cashflow: ['', Validators.required],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get ISO date', () => {
    const date = '2019-01-01';
    const isoDate = component.getDate(date);
  });
});
