import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OsIconAdd from '../icons/OsIconAdd';

const OsButtonAdd = (props) => {
  const product = props.data

  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartItems)
  let updateCartItems = [...cartItems]
  let qty = 1

  const handleAddToCart = () => {

    const exist = updateCartItems.some(item => item.product.sku == product.sku)

    if (!exist) {
      let cartItem = {}
      cartItem.product = product
      cartItem.qty = qty
      updateCartItems.push(cartItem)
    } else {
      updateCartItems.map(item => {
        if (item.product.sku == product.sku) {
          item.qty += qty
        }
        return item
      })
    }
    dispatch({type: 'set', cartItems: updateCartItems})
  }

  return (
    <>
      <button value="1/8oz" label="1/8 oz" className={props.className+' os-product-item-button'} onClick={handleAddToCart}>
        <span className="os-product-item-button__icon"><OsIconAdd /></span>
        <span className="os-product-item-button__weight">1/8 oz</span>
        <span className="os-product-item-button__price">${product.price}</span>
      </button>
    </>
  );
};

export default OsButtonAdd;