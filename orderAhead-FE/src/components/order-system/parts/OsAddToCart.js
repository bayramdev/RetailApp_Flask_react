import React from 'react';
import OsIconCart from '../icons/OsIconCart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const OsAddToCart = () => {
  const [qty, setQty] = React.useState(1);

  const handleChange = (event) => {
    setQty(event.target.value);
  };

  const range = (start, stop, step) => {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
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