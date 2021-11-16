import React from 'react';
import OsIconAdd from '../icons/OsIconAdd';

const OsButtonAdd = (props) => {
  const product = props.data

  return (
    <>
      <button value="1/8oz" label="1/8 oz" className={props.className+' os-product-item-button'}>
        <span className="os-product-item-button__icon"><OsIconAdd /></span>
        <span className="os-product-item-button__weight">1/8 oz</span>
        <span className="os-product-item-button__price">${product.price}</span>
      </button>
    </>
  );
};

export default OsButtonAdd;