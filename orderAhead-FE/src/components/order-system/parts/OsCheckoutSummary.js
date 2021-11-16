import React from 'react';
import OsSummaryItem from '../loop/OsSummaryItem';

const OsCheckoutSummary = () => {
  return (
    <div className="os-checkout-group">
      <div className="os-checkout-group__caption">Summary</div>
      <div className="os-checkout-group__body">
        <div className="os-cart-popup__products os-cart-product-list">
          <OsSummaryItem />
          <OsSummaryItem />
          <OsSummaryItem />
        </div>
      </div>
    </div>
  );
};

export default OsCheckoutSummary;