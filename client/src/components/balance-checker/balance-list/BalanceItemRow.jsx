import React from "react";

import { ListItem, IconButton, ListItemText } from "@mui/material";
import {ReactComponent as DeleteIcon} from "../../../resources/images/trash.svg";

import "./BalanceItemRow.css";

const BalanceItemRow = ({ cardNumber, balance, handleDelete }) => {
  const content = {
    cardNumberLabel: `Card Ending in ${ cardNumber.slice(-4)}`,
    balanceLabel: `Balance: $${balance}`,
  };

  return (
    <ListItem
      className="BalanceItemRow"
      divider={true}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={()=>handleDelete(cardNumber)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        className="BalanceItemRow-cardInfo"
        primary={content.cardNumberLabel}
      />
      <ListItemText
        className="BalanceItemRow-balanceInfo"
        primary={content.balanceLabel}
      />
    </ListItem>
  );
};

export { BalanceItemRow };
