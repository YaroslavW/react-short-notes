// use codesandbox  useState - https://codesandbox.io/s/7jm0wr13wj

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const App = () => {
    const [name, setName] = useState('')

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>

            <form id="form"
                onSubmit={e => {
                    e.preventDefault()
                    formSubmit(name, setName)
                    document.getElementById("form").reset();
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
const formSubmit = (value, setValue) => {
    console.log('email sent to ' + value + ' !')
    setValue('')
    console.log(name)
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// Полная ебань!
// Данные сейта меняются, а поле инпут остается без изменений!
// Пришлось добавить
// document.getElementById("form").reset();
