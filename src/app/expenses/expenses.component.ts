import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  amount: number;
  message = '';
  typeId: number;
  name: string;
  disableControls = false;
  currentMonth: number;
  currentYear: string;
  months = [
    { name: 'Jan', id: 1 },
    { name: 'Feb', id: 2 },
    { name: 'Mar', id: 3 },
    { name: 'Apr', id: 4 },
    { name: 'May', id: 5 },
    { name: 'Jun', id: 6 },
    { name: 'Jul', id: 7 },
    { name: 'Aug', id: 8 },
    { name: 'Sept', id: 9 },
    { name: 'Oct', id: 10 },
    { name: 'Nov', id: 11 },
    { name: 'Dec', id: 12 }
  ];

  monthlyExpense: any = [];
  totalExpense = 0;
  expenseTypes: any;

  constructor(private expenseSerivce: ExpenseService) {}

  ngOnInit() {
    this.getExpenseTypes();
    this.currentMonth = new Date().getMonth() + 1;
    this.currentYear = new Date()
      .getFullYear()
      .toString()
      .substr(2, 3);
    this.getExpenseByMonth(this.currentMonth);
  }

  getExpenseByMonth(month: number) {
    this.currentMonth = month;
    this.expenseSerivce
      .getExpenseByMonth(`20${this.currentYear}-${month}`)
      .subscribe((response: any) => {
        this.monthlyExpense = response.monthly_expenses;
        this.findTotal();
      });
  }
  findTotal() {
    this.totalExpense = 0;
    this.monthlyExpense.forEach((expense: any) => {
      this.totalExpense += parseInt(expense.amount, 10);
    });
  }
  getExpenseTypes() {
    this.expenseSerivce.getExpenseTypes().subscribe((response: any) => {
      this.expenseTypes = response.expense_types;
    });
  }

  addExpense() {
    this.disableControls = true;
    const data = {
      amount: this.amount,
      name: this.name,
      type_id: this.typeId,
      message: this.message
    };
    this.expenseSerivce.addExpense(data).subscribe((response: any) => {
      this.message = '';
      this.disableControls = false;
      this.getExpenseByMonth(this.currentMonth);
    });
  }
  updateExpense() {
    const data = {
      amount: this.amount,
      name: this.name,
      type_id: this.typeId,
      user_id: 1
    };
    this.expenseSerivce.updateExpense(data).subscribe((response: any) => {});
  }
  deleteExpense(id: any) {
    this.expenseSerivce.deleteExpense(id).subscribe((response: any) => {
      this.getExpenseByMonth(this.currentMonth);
    });
  }

  formatDate(date: any) {
    const x = date.split('T')[0].split('-');
    return `${x[2]}/${x[1]}`;
  }
  getMonth(m) {
    m = m + '';
    switch (m) {
      case '1':
      case '01':
        return 'Jan';
      case '2':
      case '02':
        return 'Feb';
      case '3':
      case '03':
        return 'Mar';
      case '4':
      case '04':
        return 'Apr';
      case '5':
      case '05':
        return 'May';
      case '6':
      case '06':
        return 'Jun';
      case '7':
      case '07':
        return 'Jul';
      case '8':
      case '08':
        return 'Aug';
      case '9':
      case '09':
        return 'Sep';
      case '10':
        return 'Oct';
      case '11':
        return 'Nov';
      case '12':
        return 'Dec';
    }
  }
}
