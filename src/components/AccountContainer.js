import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

state = {
  search: ''
}

mapProp(){
  return this.props.accounts.map((account, index) =>
    (<TransactionsList {...account} key={index}/>))
}
// const accounts = this.props.map((account, index) =>
//   (<TransactionsList {...account} key={index}/>))

  handleChange(event) {
   const searchBox = event.target

  }
  render() {
    return (
      <div>
        <Search onChange={this.handleChange}/>
        <TransactionsList accounts={this.mapProp}/>
      </div>
    )
  }
}

export default AccountContainer
