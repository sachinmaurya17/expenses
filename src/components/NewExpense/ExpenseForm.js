import React, {useState} from 'react';
import './ExpenseFrom.css';

const ExpenseFrom = (props) =>{
    const [enteredTittle, setEnteredTittle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput ,setUserInput] =useState({
    //     enteredTittle:'',
    //     enteredAmount : '',
    //     enteredDate :'',
    // });
    const tittleChangeHandler = (event) =>{
        setEnteredTittle(event.target.value);
        console.log(enteredTittle);
        // setUserInput({
        // ...userInput,
        // enteredTittle:event.target.value,
           
        //    })
        // setUserInput((prevState) =>{
        //     return {...prevState,enteredTittle:event.target.value};
        // })
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        //     setUserInput({
        //         ...userInput,
        //         enteredAmount:event.target.value,
            
        //    })
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        //     setUserInput({
        //         ...userInput,
        //         enteredDate:event.target.value,
            
        // })
    };
    
    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData ={
            tittle:enteredTittle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTittle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Tittle</label>
                    <input
                     type="text"
                     value={enteredTittle}
                     onChange={tittleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                     type="number"
                     value={enteredAmount}
                     min="0.01"
                     step="0.01"
                     onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                     type="date"
                     value={enteredDate} 
                     min="2019-01-01" 
                     max="2022-12-31"  
                     onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseFrom;