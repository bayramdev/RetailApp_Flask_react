import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OsTopNav from './order-system/OsTopNav'
import OsHome from './order-system/OsHome'
import { CFade } from '@coreui/react'


const OrderSystem = ({ match }) => {
  console.log(match.path)
  return (
    <div>
      <h1 className="text-center">ONLINE ORDERING</h1>
      <OsTopNav />
      <Route path={`${match.path}/test`} render={props => <OsHome {...props} />} />
    </div>
  )
}

export default OrderSystem