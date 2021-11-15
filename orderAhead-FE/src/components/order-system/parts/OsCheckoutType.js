import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


const OsCheckoutType = () => {
  return (
    <div class="os-checkout-group">
      <div class="os-checkout-group__caption">Type</div>
      <div class="os-checkout-group__body">
        <div class="os-checkout-group__border">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Pickup (In-Store)" />
              <FormControlLabel value="male" control={<Radio />} label="Pickup (Curbside)" />
              <FormControlLabel value="other" control={<Radio />} label="Delivery will reopen at 11:00AM today" />
            </RadioGroup>
            <Button variant="contained" style={{borderRadius: '33px', width: '73px'}}>Save</Button>

          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default OsCheckoutType;