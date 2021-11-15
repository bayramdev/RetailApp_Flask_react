import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import OsIconCash from '../icons/OsIconCash';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const OsCheckoutMedical = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div class="os-checkout-group">
      <div class="os-checkout-group__caption">Medical</div>
      <div class="os-checkout-group__body">
        <div class="os-checkout-group__border">
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="I have a state issued medical card" />
          </FormGroup>
          <div class="os-checkout-group__note">Your card will be verified upon pickup, and your order total has been adjusted!</div>

          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField id="filled-basic" label="Medical Card Number" variant="filled" style={{width: '100%'}} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="filled-basic" label="Medical Card Expiration" variant="filled" style={{width: '100%'}} />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" style={{borderRadius: '33px', width: '73px'}}>Save</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default OsCheckoutMedical;