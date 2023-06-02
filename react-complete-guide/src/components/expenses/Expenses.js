import { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import Card from '../ui/Card';

import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filter,setFilter] = useState('2020');

    function saveFilter(selectedFilter){
        console.log("filter aqui:" + selectedFilter);
        setFilter(selectedFilter);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelectFilter={saveFilter} filter={filter} />
                {
                    props.expenses.map(e => <ExpenseItem title={e.title} amount={e.amount} date={e.date}/>)
                }
            </Card>
        </div>
    );
}

export default Expenses;