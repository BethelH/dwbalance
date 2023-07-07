import React, { Component } from "react";

import {
  Box,
  Card,
  CardHeader,
  Button,
  CardContent,
  CardMedia,
} from "@mui/material";

import "./BalanceChecker.css";
import HeaderEndIcon from "../../resources/images/dicon.svg";
import { BalanceCheckerInput } from "./balance-checker-input/BalanceCheckerInput";

class BalanceChecker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: undefined,
      validInput: true,
    };
  }

  onChange = (event) => {
    this.setState({
      cardNumber: event.target.value,
    });
  };

  onSubmit = () => {
    const cardNumber = this.state.cardNumber.replace(/\s/g, "");
    if (cardNumber?.length === 16) {
      this.setState({
        validInput: true,
      });
      this.props.onClick(cardNumber);
    } else {
      this.setState({
        validInput: false,
      });
    }
  };

  content = {
    header: "Balance checker",
    description: "Enter your card number to check its balance.",
    cta: "Check",
    errorMessage: "Invalid number",
  };

  //Todo make form? validate through that?
  render() {
    return (
      <Box className="BalanceCheckerContainer">
        <Card className="BalanceChecker">
          <CardContent>
            <CardMedia
              className="HouseLogo"
              component="img"
              src={HeaderEndIcon}
              alt="House Logo"
            />
            <CardHeader
              title={this.content.header}
              subheader={this.content.description}
            />
          </CardContent>
          <BalanceCheckerInput
            onChange={this.onChange}
            className="BalanceChecker-input"
          />
        </Card>
        {!this.state.validInput && (
          <Box className="BalanceChecker-errorMessage">
            {this.content.errorMessage}
          </Box>
        )}
        <Button
          variant="contained"
          className="BalanceChecker-button"
          onClick={this.onSubmit}
        >
          {this.content.cta}
        </Button>
      </Box>
    );
  }
}

export { BalanceChecker };
