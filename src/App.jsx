import React from 'react'
import Balance from './components/Balance'
import Header from './components/Header'
import "./App.css"
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from "./context/GlobalState"
import IncomeExpenses from './components/IncomeExpenses'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;