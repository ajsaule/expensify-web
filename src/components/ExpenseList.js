import React from 'react'

export default function ExpenseList(props) {

    console.log(props.props)

    const printItems = () => {
        let output = props.props.map(item => {
            return item
        })
        console.log(output)
        for (let key in output) {
            return `You spent ${key[output]} on ${key[output]}`
        }
    }

    return (
        <div>
            <h1>hello world</h1>
            <p>{printItems()}</p>
        </div>
    )
}
