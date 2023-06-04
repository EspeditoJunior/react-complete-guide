import './ExpenseItem.css'
import Card from '../ui/Card';

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    return (
        <li>
            <Card className='expense-item'>
                <div>
                    <ExpenseDate date={props.date}/>
                </div>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>R${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;