import React from 'react';
import OsIconAdd from '../icons/OsIconAdd';

const OsButtonAdd = (props) => {
  return (
    <>
      <button value="1/8oz" label="1/8 oz" className={props.className+' os-product-item-button'}>
        <span class="os-product-item-button__icon"><OsIconAdd /></span>
        <span class="os-product-item-button__weight">1/8 oz</span>
        <span class="os-product-item-button__price">$35.00</span>
      </button>
    </>
  );
};

export default OsButtonAdd;