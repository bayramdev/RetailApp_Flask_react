import React from 'react';
import OsCheckoutConfirmation from '../parts/OsCheckoutConfirmation';
import OsCheckoutForm from '../parts/OsCheckoutForm';

const OsCheckoutPage = () => {
  return (
    <div class="os-layout">
      <div class="os-container">
        <div class="row">
          <div class="col-8"><OsCheckoutForm /></div>
          <div class="col-4"><OsCheckoutConfirmation /></div>
        </div>
      </div>
    </div>
  );
};

export default OsCheckoutPage;