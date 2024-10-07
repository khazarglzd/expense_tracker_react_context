import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';

    const { transactions } = useContext(GlobalContext);
    return (

        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
        </li>

    )
}

export default Transaction