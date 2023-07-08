import React, { useState } from 'react';
import sortby from 'lodash.sortby';
import { Box } from '@mui/material'

import "@fontsource/roboto";
import "@fontsource/roboto-mono";

import "./App.css"
import { BalanceCheckerForm } from './components/balance-checker/balance-checker-form/BalanceCheckerForm';
import { BalanceList } from './components/balance-checker/balance-list/BalanceList';
import { isNxxStatus } from './lib/status-helper';

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
      await fetch("/determineBalanceApi/" + cardNumber)
        .then((response) => {
          if (isNxxStatus({ status: response.status, n: 5 })) {
            throw new Error(`Bad server response: ${response.status}`);
          }

          return response.json();
        }).then((cardBalance) => {
          const updatedBalances = [...balances, { cardNumber, balance: parseInt(cardBalance) }]
          setBalances(sortby(updatedBalances, 'balance').reverse());
        }).catch((error) => {
          alert(`Caught an unexpected error ${error}`);
        });
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