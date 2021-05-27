import React from 'react';


import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) =>{
    // function clickHandler(){}
    // const [tittle,setTittle] = useState(props.tittle);
    // const clickHandler = () =>{
    //    setTittle("Updated");
    //    console.log(setTittle);
    // };

    return(
        <React.Fragment>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.tittle}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change tittle</button> */}
            </Card>
        </React.Fragment>
    );
}
export default ExpenseItem;