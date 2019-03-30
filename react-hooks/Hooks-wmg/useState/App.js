// use codesandbox  useState - https://codesandbox.io/s/7jm0wr13wj

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const App = () => {
    const [name, setName] = useState('')
    const formSubmit = () => {
        console.log('email sent!')
    }
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>{name}</h2>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    formSubmit()
                }}
            >
                <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    name={name}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

