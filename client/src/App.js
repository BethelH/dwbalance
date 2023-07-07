import { Component } from 'react';
import { Box } from '@mui/material'

import "@fontsource/roboto";
import "@fontsource/roboto-mono";

import { BalanceChecker } from './components/balance-checker/BalanceChecker';
// import {BalanceList} from './components/balance-checker/balance-list/BalanceList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balances: [],
    };

    this.checkCard = this.checkCard.bind(this)
  }

  //2222222222222222
  async checkCard(cardNumber) {
    const currentBalances = this.state.balances;
    console.log('currentBalances',currentBalances.length)
    await fetch("http://localhost:8000/determineBalanceApi/" + cardNumber)
      .then(res => res.text())
      .finally(res => this.setState({ balances: currentBalances.push({ cardNumber, balance: parseInt(res) }) }))

      console.log('afterBalance', this.state.balances.length)

  }


  render() {
    return (
      <Box >
        <BalanceChecker onClick={this.checkCard} />
        {/* <BalanceList balances={this.state.balances} /> */}
      </Box>
    )
  }
}

export default App;