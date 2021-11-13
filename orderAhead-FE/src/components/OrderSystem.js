import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import OsTopNav from './order-system/OsTopNav'
import routes from './order-system/routes'


const OrderSystem = ({ match }) => {

  return (
    <div class="order-system">
      <h1 className="order-system__heading text-center">Online System</h1>
      <OsTopNav />
      <div className="order-system__content">
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
    </div>
  )
}

export default OrderSystem