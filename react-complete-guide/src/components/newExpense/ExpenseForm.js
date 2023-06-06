import './ExpenseForm.css';
import { useState } from 'react';

function  ExpenseForm (props) {
    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState('Teste');
    const [enteredAmount, setAmount] = useState(0);
    const [enteredDate, setDate] = useState(new Date());

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event){
        setAmount(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        
        setEnteredTitle('');
        setAmount('');
        setDate('');
    }

    function hideExpense(){
        setShowExpenseForm(false);
    }

    function showExpense(){
        setShowExpenseForm(true);
    }

    //{!isEditing && (
    //  <button onClick={StartEditingHandler}>Add new Expense</button>
    //)}

    if(showExpenseForm){
        return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01" />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} onChange={dateChangeHandler}  min="2019-01-01" max="2022-12-31" />
                    </div>
                </div>
                <div className="nex-expense__actions">
                    <button type="submit">Add Expense</button>
                    <button onClick={hideExpense}>Cancel</button>
                </div>
            </form>
        )
    } else {
        return (
            <div className="nex-expense__actions">
                <button onClick={showExpense}>Add New Expense</button>
            </div>
        )
    }
}

export default ExpenseForm;