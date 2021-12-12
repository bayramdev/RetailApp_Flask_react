import React, { useEffect } from 'react';
import {Grid, TextField, Select, MenuItem, Typography, Divider, Autocomplete} from '@mui/material';
import { osServices } from '../../../../controllers/_services/ordersystem.service';

const OsOrderGeneral = () => {
  const [value, setValue] = React.useState(new Date());
  const [customer, setCustomer] = React.useState(false)
  const [options, setOptions] = React.useState([])
  const orderStatuses = [
    { code: 'pending', title: 'Pending payment' },
    { code: 'processing', title: 'Processing' },
    { code: 'on-hold', title: 'On hold' },
    { code: 'completed', title: 'Completed' },
    { code: 'cancelled', title: 'Cancelled' },
    { code: 'refunded', title: 'Refunded' },
    { code: 'failed', title: 'Failed' },
  ]

  useEffect(() => {
    osServices.osGetCustomers().then(response => {
      const customers = response.data
      console.log(customers)
    })
  }, [])
  return (
    <>
      <Typography>General</Typography>
      <Grid container direction="column" rowSpacing={2}>
        <Grid item><TextField label="Date created" fullWidth size="small"></TextField></Grid>
        <Grid item>
          <Select label="Date created" fullWidth value={'pending'} size="small">
            {orderStatuses.map(status => <MenuItem value={status.code}>{status.title}</MenuItem>)}
          </Select>
        </Grid>
        <Grid item>
          <Autocomplete id="test" options={options} autoHighlight size="small"
            renderInput={(params) => <TextField {...params} label="Select customer" />}
            onChange={(event, newValue) => {
              setCustomer(newValue.customer)
            }}
          />

        </Grid>
      </Grid>
    </>
  );
};

export default OsOrderGeneral;