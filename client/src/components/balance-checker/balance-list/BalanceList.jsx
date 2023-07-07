import React from "react";

import { List } from "@mui/material";

import { BalanceItem } from "./BalanceItem";

const BalanceList = ({ balances, handleDelete }) => {
  return (
    <List>
      {balances.map((entry, _) => (
        <BalanceItem 
          balance={entry.balance}
          cardNumber={entry.cardNumber.slice(-4)}
          key={entry.cardNumber}
          deleteBalance={handleDelete}
        />
      ))}
    </List>
  );
};

export { BalanceList };
