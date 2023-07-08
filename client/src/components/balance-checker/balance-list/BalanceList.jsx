import React from "react";

import { List } from "@mui/material";

import { BalanceItemRow } from "./BalanceItemRow";

const BalanceList = ({ balances, handleDelete }) => {
  return (
    <List>
      {balances.map((entry, _) => (
        <BalanceItemRow 
          balance={entry.balance}
          cardNumber={entry.cardNumber}
          key={entry.cardNumber}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
};

export { BalanceList };
