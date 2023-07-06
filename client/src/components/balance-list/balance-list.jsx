import { Component } from 'react';
import { List } from '@mui/material';

import { BalanceItem } from './balance-item';

class BalanceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            balances: [
                'Learn React',
                'Write blog posts',
                'Kick back and relax'
            ]
        };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(balance) {
        this.setState({ balance });
    }

    render() {
        return (
            <List>
                {this.state.balances.map((balance, index) =>
                    <BalanceItem balance={balance} key={index} updateBalance={this.handleUdpate} />
                )}
            </List>
        );
    }
}

export { BalanceList }