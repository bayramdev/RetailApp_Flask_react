import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { formatPrice } from '../ultility';

const OsCheckoutConfirmation = () => {
  const logoUrl = 'https://images.dutchie.com/a89959a44be67f84f7a949afecf2f35c?auto=format&ixlib=react-9.0.2&h=53&w=65&q=75&dpr=1'
  const cartItems = useSelector(state => state.cartItems)

  let subTotalPrice = 0

  cartItems.forEach(element => {
    subTotalPrice += element.qty*element.product.price
  })

  let tax = 21.31
  let mix = 25.00
  let totalPrice = subTotalPrice + tax + mix

  const history = useHistory()
  if (cartItems.length == 0) {
    history.push('/order')
  }

  return (
    <>
      <div className="confirmation">
        <div className="confirmation__header">
          <div className="confirmation__logo">
            <img src={logoUrl} />
          </div>
          <div className="confirmation__store">
            <div className="confirmation__title">Open Ahead</div>
            <div className="confirmation__estimate-pickup">Est. pickup | 20 - 30 min</div>
          </div>
        </div>
        <div className="confirmation__body">
          <div className="confirmation__table">
            <div className="confirmation__item">
              <div className="confirmation__label">Subtotal:</div>
              <div className="confirmation__value">{formatPrice(subTotalPrice)}</div>
            </div>
            <div className="confirmation__item">
              <div className="confirmation__label">Mix and Match:</div>
              <div className="confirmation__value">{formatPrice(mix)}</div>
            </div>
            <div className="confirmation__item">
              <div className="confirmation__label">Taxes:</div>
              <div className="confirmation__value">{formatPrice(tax)}</div>
            </div>
          </div>
          <div className="confirmation__promo-code"></div>
        </div>
        <div className="confirmation__footer">
          <div className="confirmation__total">
            <div className="confirmation__label">ORDER TOTAL:</div>
            <div className="confirmation__value">{formatPrice(totalPrice)}</div>
          </div>
          <div className="confirmation__button-placeorder">PLACE ORDER</div>
          <div className="confirmation__note-term">By placing an order you agree to our Terms and to receive automated text message updates.</div>
        </div>
      </div>
    </>
  );
};

export default OsCheckoutConfirmation;