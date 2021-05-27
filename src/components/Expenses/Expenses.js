import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
 const Expenses=(props)=>{

    const [filterYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    };
    

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>

            {props.item.map((expense) =>(
                <ExpenseItem 
                    tittle={expense.tittle}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}

            
        </Card>    
        
    );
 }
 export default Expenses;