import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import OsTopNav from './order-system/OsTopNav'
import OsHome from './order-system/OsHome'
import routes from './order-system/routes'
import { CFade } from '@coreui/react'
import { Suspense } from 'react'


const OrderSystem = ({ match }) => {

  return (
    <>
      <h1 className="text-center">Online System</h1>
      <OsTopNav />
      <div className="mt-3">
        {routes.map((route, idx) => {
          return route.component && (
            <Route
              key={idx}
              path={match.url + route.path}
              render={props => (
                <route.component {...props} />
              )} />
          )
        })}
        <Redirect from="/" to={`${match.url}/home`}></Redirect>
      </div>
    </>
  )
}

export default OrderSystem