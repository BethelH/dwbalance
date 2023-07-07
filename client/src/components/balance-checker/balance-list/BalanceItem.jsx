import React from "react";

import { ListItem, IconButton, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "./BalanceItem.css";

const BalanceItem = ({ cardNumber, balance, handleDelete }) => {
  const content = {
    cardNumberLabel: "Card Ending in ",
    balanceLabel: "Balance: $",
  };

  return (
    <ListItem
      className="BalanceItemRow"
      divider={true}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        className="BalanceItem-cardInfo"
        primary={`${content.cardNumberLabel}${cardNumber}`}
      />
      <ListItemText
        className="BalanceItem-balanceInfo"
        primary={`${content.balanceLabel}${balance}`}
      />
    </ListItem>
  );
};

export { BalanceItem };
