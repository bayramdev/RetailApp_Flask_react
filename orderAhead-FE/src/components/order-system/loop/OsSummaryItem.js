import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {range} from '../ultility'
import OsIconRemove from '../icons/OsIconRemove';

const OsSummaryItem = () => {
  const [qty, setQty] = React.useState(1);
  const qtys = range(1, 8)

  return (
	  <div className="os-cart-product-item">
	    <div className="os-cart-product-item__details">
	      <div className="os-cart-product-item__name">Purple Punch</div>
	      <div className="os-cart-product-item__brand">Green Fellas</div>
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
            >
              {qtys.map(qty => <MenuItem value={qty}>{qty}</MenuItem>)}
            </Select>
        </div>
	      <div className="os-cart-product-item__price">$175.00</div>
	    </div>
	  </div>

  );
};

export default OsSummaryItem;