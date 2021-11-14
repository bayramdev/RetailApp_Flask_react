import React from 'react';
import OsIconCart from '../icons/OsIconCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {range} from '../ultility'

const OsAddToCart = () => {
  const [qty, setQty] = React.useState(1);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const qtys = range(1, 8)


  return (
    <div class="os-addtocart">
      <div class="os-addtocart__qty">
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
      <div class="os-addtocart__button-wrapper">
        <button class="os-addtocart__button">
          <OsIconCart></OsIconCart>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default OsAddToCart;