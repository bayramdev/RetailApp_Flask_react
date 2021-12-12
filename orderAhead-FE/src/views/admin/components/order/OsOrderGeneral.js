import React, { useEffect, useState } from 'react';
import {Grid, TextField, Select, MenuItem, Typography, CircularProgress, Autocomplete} from '@mui/material';
import { osServices } from '../../../../controllers/_services/ordersystem.service';
import { useCustomerContext } from '../../contexts/OsOrderContext';

const OsOrderGeneral = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = React.useState(new Date());
  const [, setCustomer] = useCustomerContext(false)
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
      let updatedOptions = []
      customers.map(customer => updatedOptions.push({
        label: customer.customer_name, customer: customer
      }))

      setOptions(updatedOptions)
      setLoading(false)
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
          <Autocomplete id="test" options={options}
            autoHighlight size="small"
            loading={loading}
            onChange={(event, newValue) => {
              if (newValue) {
                setCustomer(newValue.customer)
              }
            }}

            renderInput={(params) => (
              <TextField
                {...params}
                label="Select customer"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />

        </Grid>
      </Grid>
    </>
  );
};

export default OsOrderGeneral;