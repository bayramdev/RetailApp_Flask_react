import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {range} from '../ultility'
import OsIconRemove from '../icons/OsIconRemove';

const OsCartItem = () => {
  const [qty, setQty] = React.useState(1);
  const imageUrl = 'https://images.dutchie.com/3ab388bd90bd1b60d85d4d22eed7c9b2?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=81&w=81&q=75&dpr=1'
  const qtys = range(1, 8)
  const handleChange = (event) => {
    setQty(event.target.value);
  };
  const handleRemove = (event) => {
    alert('xxx')
  };

  return (
	  <div className="os-cart-product-item">
	    <div className="os-cart-product-item__image">
        <img src={imageUrl} />
      </div>
	    <div className="os-cart-product-item__details">
	      <div className="os-cart-product-item__name">Purple Punch</div>
	      <div className="os-cart-product-item__brand">Green Fellas</div>
	      <div className="os-cart-product-item__actions">
	        <div className="os-cart-product-item__weight">
            <Select
              value={qty}
              label="Qty"
              className="os-cart-item-weight"
            >
              {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
            </Select>
          </div>
          <div className="os-seprator"></div>
	        <div className="os-cart-product-item__remove" onClick={handleRemove}><OsIconRemove />&nbsp;Remove</div>
	      </div>
	    </div>
	    <div className="os-cart-product-item__options">
	      <div className="os-cart-product-item__qty">
            <Select
              className="os-cart-item-qty"
              value={qty}
              label="Qty"
              onChange={handleChange}
            >
              {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
            </Select>
        </div>
	      <div className="os-cart-product-item__price">$175.00</div>
	    </div>
	  </div>

  );
};

export default OsCartItem;