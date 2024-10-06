import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        {
            id: 1, text: "Flower", amount: "-20.00"
        },
        {
            id: 2, text: "Book", amount: "-35.00"
        },
        {
            id: 3, text: "Parfume", amount: "-80.00"
        },
        {
            id: 4, text: "Charger", amount: "-15.00"
        },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
    }}>
        {children}
    </GlobalContext.Provider>);
}