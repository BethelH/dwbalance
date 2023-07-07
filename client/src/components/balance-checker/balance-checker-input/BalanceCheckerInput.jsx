import React, { Component } from "react";
import InputMask from "react-input-mask";

import { Input } from "@mui/material";

import "./BalanceCheckerInput.css";

class BalanceCheckerInput extends Component {
  render() {
    return (
      <InputMask mask={"9999 9999 9999 9999"} maskChar=" " {...this.props}>
        {(inputProps) => (
          <Input
            {...inputProps}
            placeholder="xxxx xxxx xxxx xxxx"
            type="tel"
            className="BalanceChecker-input"
          />
        )}
      </InputMask>
    );
  }
}

export { BalanceCheckerInput };
