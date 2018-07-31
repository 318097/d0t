import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  amount: number;
  typeId = 0;
  name: string;

  currentMonth: number;
  showAddField = false;
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

  constructor(private expenseSerivce: ExpenseService) { }

  ngOnInit() {
    this.getExpenseTypes();
    this.currentMonth = new Date().getMonth() + 1;
    // console.log(currentMonth);
    this.getExpenseByMonth(this.currentMonth);
  }

  getExpenseByMonth(month: number) {
    this.currentMonth = month;
    this.expenseSerivce.getExpenseByMonth(month)
      .subscribe((response: any) => {
        this.monthlyExpense = response.monthly_expenses;
        this.findTotal();
      });
  }
  findTotal() {
    this.totalExpense = 0;
    this.monthlyExpense.forEach((expense: any) => {
      this.totalExpense += expense.amount;
    });
  }
  getExpenseTypes() {
    this.expenseSerivce.getExpenseTypes()
      .subscribe((response: any) => {
        this.expenseTypes = response.expense_types;
      });
  }

  addExpense() {
    const data = {
      amount: this.amount,
      name: this.name,
      type_id: this.typeId,
      user_id: 1
    };
    this.expenseSerivce.addExpense(data)
      .subscribe((response: any) => {
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
    this.expenseSerivce.updateExpense(data)
      .subscribe((response: any) => {
      });
  }
  deleteExpense(id: number) {
    this.expenseSerivce.deleteExpense(id)
      .subscribe((response: any) => {
      });
  }

  formatDate(date: any) {
    let x = date.split(' ')[0].split('-');
    return `${x[2]}/${x[1]}`;
  }

}
