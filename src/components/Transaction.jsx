import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
            <li className='minus' > {transaction.text}
                <span>{transaction.amount}</span>
                <button className='delete-btn' >x</button>
            </li>
        </div>
    )
}

export default Transaction