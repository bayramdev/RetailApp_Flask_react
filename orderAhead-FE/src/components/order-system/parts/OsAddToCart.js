import React from 'react';
import OsIconCart from '../icons/OsIconCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {range} from '../ultility'
import { useDispatch, useSelector } from 'react-redux';

const OsAddToCart = (props) => {
  const [qty, setQty] = React.useState(1);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const qtys = range(1, 8)
  const product = props.data
  const dispatch = useDispatch()

  const cartItems = useSelector(state => state.cartItems)
  let updateCartItems = [...cartItems]

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
    <div className="os-addtocart">
      <div className="os-addtocart__qty">
        <FormControl fullWidth>
          <InputLabel id="os-qty-label">Qty</InputLabel>
          <Select
            labelId="os-qty-label"
            id="os-qty-select"
            value={qty}
            label="Qty"
            displayEmpty
            onChange={handleChange}
          >
            {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      <div className="os-addtocart__button-wrapper">
        <button className="os-addtocart__button" onClick={handleAddToCart}>
          <OsIconCart></OsIconCart>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default OsAddToCart;