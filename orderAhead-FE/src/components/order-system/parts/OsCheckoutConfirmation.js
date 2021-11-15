import React from 'react';

const OsCheckoutConfirmation = () => {
  const logoUrl = 'https://images.dutchie.com/a89959a44be67f84f7a949afecf2f35c?auto=format&ixlib=react-9.0.2&h=53&w=65&q=75&dpr=1'
  return (
    <>
      <div class="confirmation">
        <div class="confirmation__header">
          <div class="confirmation__logo">
            <img src={logoUrl} />
          </div>
          <div class="confirmation__store">
            <div class="confirmation__title">Open Ahead</div>
            <div class="confirmation__estimate-pickup">Est. pickup | 20 - 30 min</div>
          </div>
        </div>
        <div class="confirmation__body">
          <div class="confirmation__table">
            <div class="confirmation__item">
              <div class="confirmation__label">Subtotal:</div>
              <div class="confirmation__value">$387.50</div>
            </div>
            <div class="confirmation__item">
              <div class="confirmation__label">Mix and Match:</div>
              <div class="confirmation__value">($25.00)</div>
            </div>
            <div class="confirmation__item">
              <div class="confirmation__label">Taxes:</div>
              <div class="confirmation__value">$21.31</div>
            </div>
          </div>
          <div class="confirmation__promo-code"></div>
        </div>
        <div class="confirmation__footer">
          <div class="confirmation__total">
            <div class="confirmation__label">ORDER TOTAL:</div>
            <div class="confirmation__value">$408.81</div>
          </div>
          <div class="confirmation__button-placeorder">PLACE ORDER</div>
          <div class="confirmation__note-term">By placing an order you agree to our Terms and to receive automated text message updates.</div>
        </div>
      </div>
    </>
  );
};

export default OsCheckoutConfirmation;