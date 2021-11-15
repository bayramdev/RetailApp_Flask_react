import React from 'react';
import OsSummaryItem from '../loop/OsSummaryItem';

const OsCheckoutSummary = () => {
  return (
    <div class="os-checkout-group">
      <div class="os-checkout-group__caption">Summary</div>
      <div class="os-checkout-group__body">
        <div class="os-cart-popup__products os-cart-product-list">
          <OsSummaryItem />
          <OsSummaryItem />
          <OsSummaryItem />
        </div>
      </div>
    </div>
  );
};

export default OsCheckoutSummary;