import  React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ExpenseList from './ExpenseList'

export default function Events() {

    const [expense, setExpense] = useState(null)
    const [expenseArr, setExpenseArr] = useState([])
    
    const handleSubmit = (e) => {
        let { name, value } = e.target // how do I reset the text field without using inner HTML ?? 
        e.preventDefault()
        expenseArr.push(expense)
        console.log(expenseArr)
    }
    
    const handleChange = (e, stateObject) => {
        const { name, value } = e.target
        setExpense({ ...stateObject, [name]: value })
    }

    return (
        <div>
            <Link to={'/'}>
                <button>Back</button>
            </Link>
            <h1>Calculate your expenses</h1>
            <form onSubmit={handleSubmit}>
                <p>How much you spent</p>
                <input onChange={(e) => handleChange(e, expense)} name="amount" type="number" />
                <p>What did you spend it on</p>
                <input onChange={(e) => handleChange(e, expense)} name="type" type="text" />
                <input type="submit" value="Log"/>
            </form>
            <ExpenseList props={expenseArr}/>
        </div>
    )
}

// passing props through to loop through and print the list 
