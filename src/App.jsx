import React from 'react'
import Balance from './components/Balance'
import { Header } from './components/Header'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
      </div>
    </div>
  )
}

export default App