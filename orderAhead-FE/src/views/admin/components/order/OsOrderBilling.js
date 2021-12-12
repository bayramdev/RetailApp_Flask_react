import React, {useEffect, useState} from 'react';
import {Button, TextField, Typography, Grid, Select} from '@mui/material'
import { useBillingContext, useCustomerContext } from '../../contexts/OsOrderContext';

const OsOrderBilling = () => {
  const [customer,] = useCustomerContext(false)
  const [selectedCustomer, setSelectedCustomer] = useState(customer)
  const [billing, setBilling] = useBillingContext({
    first_name: '',
    last_name: '',
  })

  let handleLoadBillingAddress = e => {
    if (!selectedCustomer) {
      alert('No customer selected')
      return
    }

    setBilling({
      first_name: selectedCustomer.customer_name,
      last_name: selectedCustomer.customer_name,
    })
  }

  useEffect(() => {
    setSelectedCustomer(customer)
  }, [customer])


  return (
    <>
      <Typography>Billing</Typography>

      <Grid container spacing={2}>
        <Grid item xs="12"><Button onClick={handleLoadBillingAddress} size="small" variant="outlined">Load billing address</Button></Grid>
        <Grid item xs="6"><TextField label="First name" value={billing.first_name} fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Last name" value={billing.last_name} fullWidth size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Company" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Address line 1" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Address line 2" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="City" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Postcode / ZIP" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Country / Region" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="State / County" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Email address" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Phone" fullWidth size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Payment method:" fullWidth size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Transaction ID" fullWidth size="small"></TextField></Grid>
      </Grid>
    </>
  );
};

export default OsOrderBilling;