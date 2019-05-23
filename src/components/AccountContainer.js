import React, {Component} from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const transactionsArray = [];

class AccountContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: transactionsArray
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      const result = await response.json()
      transactionsArray = [...result]
      this.setState({transactions: transactionsArray})
    } catch (error) {
      console.log(error.message);
    }
  }

  handleChange = (event) => {
    const search = event.target.value;
    const displayedTransactions = transactionsArray.filter((transaction) => {
      return transaction.description.toLowerCase().includes(search);
    });
    this.setState({transactions: displayedTransactions})
  }

  render() {
    return (<div>
      <Search search={this.handleChange}/>
      <TransactionsList transactions={this.state.transactions}/>
    </div>)
  }
}

export default AccountContainer
