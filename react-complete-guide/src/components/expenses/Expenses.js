import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../ui/Card';
import ExpensesChart from './ExpensesChart';

import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filter,setFilter] = useState('2020');

    function saveFilter(selectedFilter){
        setFilter(selectedFilter);
    }

    const filteredExpenses = props.expenses.filter(e => {
        return e.date.getFullYear().toString() === filter;
    });

    //let expensesCount = <p>No expenses found.</p>;

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onSelectFilter={saveFilter} filter={filter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;