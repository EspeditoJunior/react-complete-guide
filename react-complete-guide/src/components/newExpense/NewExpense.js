import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function  NewExpense (props) {
    function saveExpenseDataHandler(enteredExpenseDate) {
        const expenseDate = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDate);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>        
        </div>
    );
};

export default NewExpense;