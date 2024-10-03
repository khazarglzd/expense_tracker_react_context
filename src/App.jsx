import React from 'react'
import Balance from './components/Balance'
import { Header } from './components/Header'
import "./App.css"
import IncomeExpences from './components/IncomeExpences'
import TransactionList from './components/TransactionList'

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpences />
        <TransactionList />
      </div>
    </div>
  )
}

export default App