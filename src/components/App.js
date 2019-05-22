import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  state = {
    accounts: []
  }

  async componentDidMount(){
    const response = await fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    const result = await response.json()
    this.setState({accounts:result})
  }
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer accounts={this.state.accounts}/>
      </div>
    )
  }
}

export default App
