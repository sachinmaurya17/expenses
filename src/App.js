import React,{useState} from 'react';
import './index.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense.js';

// function 

const DUMMY_EXPENSES = [
  {
    id:"e1",
    tittle:"Toliet Paper",
    amount:40,
    date:new Date(2021,5,12),
  },
  {
    id:"e2",
    tittle:"Car Insurance",
    amount:450,
    date:new Date(2021,5,12),
  },
  {
    id:"e3",
    tittle:"Book Purchase",
    amount:100,
    date:new Date(2021,5,12),
  },
  {
    id:"e4",
    tittle:"Electicity Bll",
    amount:450,
    date:new Date(2021,5,12),
  }
];




const App =() => {

  const[expenses,setExpense]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpense(prevExpenses =>{
      return [expense,...prevExpenses]
    });
  }
  return(
    <React.Fragment>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}></Expenses>
  </React.Fragment>
  );
  
}
export default App;
