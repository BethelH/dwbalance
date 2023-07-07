import React, { useState } from "react";

import {
  Box,
  Card,
  CardHeader,
  Button,
  CardContent,
  CardMedia,
} from "@mui/material";

import "./BalanceCheckerForm.css";
import HeaderEndIcon from "../../../resources/images/dicon.svg";
import { BalanceCheckerInput } from "../balance-checker-input/BalanceCheckerInput";

const BalanceCheckerForm = ({ onClick }) => {
  const [cardNumber, setCardNumber] = useState();
  const [isValidInput, setIsValidInput] = useState(true);

  const onChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSubmit =  (async (e) => {
    e.preventDefault();

    const cleanedCardNumber = cardNumber.replace(/\s/g, "");
    if (cleanedCardNumber?.length === 16) {
      setIsValidInput(true);
      onClick(cleanedCardNumber);
    } else {
      setIsValidInput(false);
    }
  });

  const content = {
    header: "Balance checker",
    description: "Enter your card number to check its balance.",
    cta: "Check",
    errorMessage: "Invalid number",
  };

  return (
    <form className="BalanceCheckerContainer" onSubmit={handleSubmit}>
      <Card className="BalanceCheckerForm">
        <CardContent>
          <CardMedia
            className="HouseLogo"
            component="img"
            src={HeaderEndIcon}
            alt="House Logo"
          />
          <CardHeader title={content.header} subheader={content.description} />
        </CardContent>
        <BalanceCheckerInput
          onChange={onChange}
          className="BalanceChecker-input"
        />
      </Card>
      {!isValidInput && (
        <Box className="ErrorMessage">
          {content.errorMessage}
        </Box>
      )}
      <Button
        variant="contained"
        className="BalanceChecker-button"
        type="submit"
      >
        {content.cta}
      </Button>
    </form>
  );
};

export { BalanceCheckerForm };
