import React from 'react';

const OsCheckoutConfirmation = () => {
  const logoUrl = 'https://images.dutchie.com/a89959a44be67f84f7a949afecf2f35c?auto=format&ixlib=react-9.0.2&h=53&w=65&q=75&dpr=1'
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
              <div className="confirmation__value">$387.50</div>
            </div>
            <div className="confirmation__item">
              <div className="confirmation__label">Mix and Match:</div>
              <div className="confirmation__value">($25.00)</div>
            </div>
            <div className="confirmation__item">
              <div className="confirmation__label">Taxes:</div>
              <div className="confirmation__value">$21.31</div>
            </div>
          </div>
          <div className="confirmation__promo-code"></div>
        </div>
        <div className="confirmation__footer">
          <div className="confirmation__total">
            <div className="confirmation__label">ORDER TOTAL:</div>
            <div className="confirmation__value">$408.81</div>
          </div>
          <div className="confirmation__button-placeorder">PLACE ORDER</div>
          <div className="confirmation__note-term">By placing an order you agree to our Terms and to receive automated text message updates.</div>
        </div>
      </div>
    </>
  );
};

export default OsCheckoutConfirmation;