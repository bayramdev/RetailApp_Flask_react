import React from 'react';
import {Grid, TextField, Select, MenuItem, Typography, Divider} from '@mui/material';

const OsOrderGeneral = () => {
  const [value, setValue] = React.useState(new Date());
  const [customers, setCustomers] = React.useState([{id:1, name:'Test customer'}])
  const orderStatuses = [
    { code: 'pending', title: 'Pending payment' },
    { code: 'processing', title: 'Processing' },
    { code: 'on-hold', title: 'On hold' },
    { code: 'completed', title: 'Completed' },
    { code: 'cancelled', title: 'Cancelled' },
    { code: 'refunded', title: 'Refunded' },
    { code: 'failed', title: 'Failed' },
  ]
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
          <Select label="Customer" fullWidth size="small" value={1}>
            {customers.map(customer => <MenuItem value={customer.id}>{customer.name}</MenuItem>)}
          </Select>
        </Grid>
      </Grid>
    </>
  );
};

export default OsOrderGeneral;