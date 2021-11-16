import React from 'react';
import { useHistory } from 'react-router-dom';
import OsIconClose from './icons/OsIconClose';
import OsCartItem from './loop/OsCartItem';

const OsCartPopup = (props) => {
  const history = useHistory()
  return (
    <div className="os-cart-popup">
      <div className="os-cart-popup__header">
        <div className="os-cart-popup__overview">
          <div className="os-cart-popup__title">Shopping Cart</div>
          <div className="os-cart-popup__subtotal">Subtotal:&nbsp;$222.50</div>
        </div>
        <button className="os-cart-popup__close" onClick={props.closeDrawer()}>
          <OsIconClose />&nbsp; Close
        </button>
      </div>
      <div className="os-cart-popup__details">
        <div className="os-cart-popup__products os-cart-product-list">
          <OsCartItem />
          <OsCartItem />
          <OsCartItem />
        </div>
      </div>
      <div className="os-cart-popup__footer">
        <button className="os-cart-popup__checkout-button" onClick={(e) => {e.preventDefault();props.closeDrawer();history.push('/order/checkout')}}>Proceed to checkout</button>
        <div className="os-cart-popup__right">
          <div className="os-cart-popup__total">Subtotal: $222.50</div>
          <div className="os-cart-popup__taxnote">*Cannabis tax will be added at checkout.</div>
        </div>
      </div>
    </div>
  );
};

export default OsCartPopup;