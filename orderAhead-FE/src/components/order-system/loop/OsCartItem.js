import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {range} from '../ultility'
import OsIconRemove from '../icons/OsIconRemove';

const OsCartItem = () => {
  const [qty, setQty] = React.useState(1);
  const imageUrl = 'https://images.dutchie.com/3ab388bd90bd1b60d85d4d22eed7c9b2?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=81&w=81&q=75&dpr=1'
  const qtys = range(1, 8)

  return (
	  <div class="os-cart-product-item">
	    <div class="os-cart-product-item__image">
        <img src={imageUrl} />
      </div>
	    <div class="os-cart-product-item__details">
	      <div class="os-cart-product-item__name">Purple Punch</div>
	      <div class="os-cart-product-item__brand">Green Fellas</div>
	      <div class="os-cart-product-item__actions">
	        <div class="os-cart-product-item__weight">
            <Select
              value={qty}
              label="Qty"
              className="os-cart-item-weight"
            >
              {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
            </Select>
          </div>
          <div className="os-seprator"></div>
	        <div class="os-cart-product-item__remove"><OsIconRemove />&nbsp;Remove</div>
	      </div>
	    </div>
	    <div class="os-cart-product-item__options">
	      <div class="os-cart-product-item__qty">
            <Select
              className="os-cart-item-qty"
              value={qty}
              label="Qty"
            >
              {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
            </Select>
        </div>
	      <div class="os-cart-product-item__price">$175.00</div>
	    </div>
	  </div>

  );
};

export default OsCartItem;