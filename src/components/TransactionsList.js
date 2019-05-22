import React from 'react'

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At {props.posted_at}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description {props.description}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category {props.posted_at}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount{props.amount}
            </h3>
          </th>
        </tr>
      </tbody>
    </table>
  )
}

export default TransactionsList
