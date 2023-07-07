import { Component } from 'react';
import { List } from '@mui/material';

import { BalanceItem } from './BalanceItem';

class BalanceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            balances: props.balances
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(cardNumberToRemove) {
        const remainingBalances = this.balances.filter((balance)=> balance.cardNumber !== cardNumberToRemove);
        this.setState({ balances: remainingBalances });
    }

    render() {
        return (
            <List>
                {this.state.balances.map((balance, _) =>
                    <BalanceItem balance={balance} key={balance.cardNumber} deleteBalance={this.handleDelete} />
                )}
            </List>
        );
    }
}

export { BalanceList }