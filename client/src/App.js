import React, { useState, useEffect } from 'react';
import sortby from 'lodash.sortby';
import { Box } from '@mui/material'

import "@fontsource/roboto";
import "@fontsource/roboto-mono";

import { BalanceCheckerForm } from './components/balance-checker/BalanceCheckerForm';
// import {BalanceList} from './components/balance-checker/balance-list/BalanceList';

const App = () => {
  const [balances, setBalances] = useState([]);

  useEffect(() => {
    console.log('balancesb4',JSON.stringify(balances))

    setBalances(sortby(balances, 'balance'));
    console.log('balances',JSON.stringify(balances))
  }, [balances]);

  //2223222222222225
  //2223222222222223
  //1111222222222222
  //1111222222222221
  async function  checkCard (cardNumber) {
     const response = await fetch("http://localhost:8000/determineBalanceApi/" + cardNumber)
    const balance = await response.text()

    setBalances([...balances, { cardNumber, balance: parseInt(balance) }])
  };

  return (
    <Box >
      <BalanceCheckerForm onClick={checkCard} />
      {/* <BalanceList balances={balances} /> */}
    </Box>
  )
}

export default App;