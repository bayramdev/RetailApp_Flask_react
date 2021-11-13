import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import routes from './routes'

const OsTopNav = () => {
  const {url} = useRouteMatch()

  const OsItem = (props) => (<div className="os-header__item">{props.children}</div>)
  const OsLink = (props) => (<Link className="os-header__link" to={props.to}>{props.children}</Link>)
  const OsItemLink = (props) => (<OsItem><OsLink to={props.to}>{props.children}</OsLink></OsItem>)

  return (
    <>
      <div className="os-header">
        <nav className="os-header__nav">
          <OsItemLink to={`${url}/home`}>Home</OsItemLink>
          <OsItemLink to={`${url}/products`}>Categories</OsItemLink>
          <OsItemLink to={`${url}/brands`}>Brand</OsItemLink>
        </nav>
      </div>
    </>
  )
}

export default OsTopNav