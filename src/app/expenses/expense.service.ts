import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const routes = {
  'expense': 'exp',
  'getExpenseTypes': 'exp_types',
};

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  getExpenseByMonth(month: any) {
    return this.http.get(`${routes.expense}/${month}`);
  }
  getExpenseTypes() {
    return this.http.get(routes.getExpenseTypes);
  }
  addExpense(data) {
    return this.http.post(routes.expense, data);
  }
  updateExpense(data) {
    return this.http.put(routes.expense, data);
  }
  deleteExpense(id) {
    return this.http.delete(`${routes.expense}/${id}`);
  }
}
