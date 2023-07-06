import { Component } from "react";
import { Card, CardHeader, Input } from "@mui/material";

class BalanceChecker extends Component {
  // constructor(props) {
  //     super(props);
  // }

  content = {
    header: "Balance checker",
    description: "Enter your card number to check its balance.",
    cta: "Check",
    placeholder: "xxxx xxxx xxxx xxxx",
  };

  render() {
    return (
      <Card style={{ borderColor: 'black', background:'#FDF4EC',width: "100%", boxShadow:'none' }}>
        <CardHeader
          title={this.content.header}
          subheader={this.content.description}
        />
        <Input
          fullWidth
          type="tel"
          style={{ textAlign: "center", fill: '#FFF' }}
          placeholder={this.content.placeholder}
        />
      </Card>
    );
  }
}

export { BalanceChecker };
