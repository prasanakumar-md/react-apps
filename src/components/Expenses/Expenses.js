import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if (filteredYear !== "") {
      return expense.date.getFullYear().toString() === filteredYear;
    } else {
      return expense;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterYearHandler}
        filteredYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
