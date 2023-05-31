import './ExpenseItem.css'
import Card from '../ui/Card';
import { useState } from 'react';

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    function clickHandler() {
        setTitle(prevTitle => {
            return prevTitle + " oi";
        });
    }


    return (
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={props.date}/>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>R${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;