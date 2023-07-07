import React, { useState } from 'react';
import sortby from 'lodash.sortby';
import { Box } from '@mui/material'

import "@fontsource/roboto";
import "@fontsource/roboto-mono";

import "./App.css"
import { BalanceCheckerForm } from './components/balance-checker/balance-checker-form/BalanceCheckerForm';
import { BalanceList } from './components/balance-checker/balance-list/BalanceList';

const App = () => {
  const [balances, setBalances] = useState([]);
  const [isDuplicateError, setIsDuplicateError] = useState(false);

  const isCardNumberDuplicate = (cardNumber) => {
    const duplicateList = balances.filter(entry => entry.cardNumber === cardNumber);

    return duplicateList.length > 0
  }

  async function checkCard(cardNumber) {
    const duplicateFound = isCardNumberDuplicate(cardNumber);
    setIsDuplicateError(duplicateFound);

    if (!duplicateFound) {
      const response = await fetch("http://localhost:8000/determineBalanceApi/" + cardNumber)
      const cardBalance = await response.text()

      const updatedBalances = [...balances, { cardNumber, balance: parseInt(cardBalance) }]
      setBalances(sortby(updatedBalances, 'balance').reverse());
    }
  };

  function handleDelete(cardNumber) {
    setBalances(balances.filter(entry => entry.cardNumber !== cardNumber))
  }

  return (
    <Box className='BalanceCheckerApp'>
      <BalanceCheckerForm onClick={checkCard} />
      {isDuplicateError && <Box className='ErrorMessage'>Card already in list, skipping entry</Box>}
      <BalanceList balances={balances} handleDelete={handleDelete} />
    </Box>
  )
}

export default App;