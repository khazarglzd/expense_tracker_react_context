import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        {
            id: 1, text: "Salary", amount: 1450.00
        },
        {
            id: 2, text: "Book", amount: -70.00
        },
        {
            id: 3, text: "Parfume", amount: -220.00
        },
        {
            id: 4, text: "Charger", amount: -36.15
        },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}