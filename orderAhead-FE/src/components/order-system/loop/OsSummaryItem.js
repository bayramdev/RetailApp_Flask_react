import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {formatPrice, range} from '../ultility'
import OsIconRemove from '../icons/OsIconRemove';

const OsSummaryItem = (props) => {
	const cartItem = props.data
  const [qty, setQty] = React.useState(1);
  const qtys = range(1, 8)
	console.log(cartItem)

  return (
	  <div className="os-cart-product-item">
	    <div className="os-cart-product-item__details">
	      <div className="os-cart-product-item__name">{cartItem.product.name}</div>
	      <div className="os-cart-product-item__brand">{cartItem.product.brand}</div>
	      <div className="os-cart-product-item__actions">
	        <div className="os-cart-product-item__weight">Shart | 1/2oz</div>
          <div className="os-seprator"></div>
	        <div className="os-cart-product-item__remove"><OsIconRemove />&nbsp;Remove</div>
	      </div>
	    </div>
	    <div className="os-cart-product-item__options">
	      <div className="os-cart-product-item__qty">
            <Select
              className="os-cart-item-qty"
              value={qty}
              label="Qty"
							disabled
            >
              {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
            </Select>
        </div>
	      <div className="os-cart-product-item__price">{formatPrice(cartItem.product.price*cartItem.qty)}</div>
	    </div>
	  </div>

  );
};

export default OsSummaryItem;