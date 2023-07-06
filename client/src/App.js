import { Component } from 'react';
import { Box } from '@mui/material'

// import { BalanceList } from './components/balance-list/balance-list'
import { BalanceChecker } from './components/balance-checker' //todo make a folder



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  checkCard({ cardNumber }) {
    fetch("http://localhost:8000/determineBalanceApi/" + cardNumber)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <Box maxWidth={400} fontFamily={'Roboto Mono'}>
        <BalanceChecker />
      </Box>
    )
  }
}

export default App;