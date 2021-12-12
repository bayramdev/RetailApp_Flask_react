import React, {useEffect, useState} from 'react';
import {Button, TextField, Typography, Grid, Select} from '@mui/material'
import { useBillingContext, useCustomerContext } from '../../contexts/OsOrderContext';

const OsOrderBilling = () => {
  const [customer,] = useCustomerContext(false)
  const [selectedCustomer, setSelectedCustomer] = useState(customer)
  const [billing, setBilling] = useBillingContext({
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    postcode: '',
    country: '',
    state: '',
    email: '',
  })

  let handleLoadBillingAddress = e => {
    if (!selectedCustomer) {
      alert('No customer selected')
      return
    }

    setBilling({
      first_name: selectedCustomer.customer_name,
      last_name: selectedCustomer.customer_name,
      company: selectedCustomer.company,
      address_1: selectedCustomer.address_1,
      address_2: selectedCustomer.address_2,
      city: selectedCustomer.city,
      postcode: selectedCustomer.postcode,
      country: 'The United State',
      state: selectedCustomer.state,
      email: selectedCustomer.email,
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
        <Grid item xs="6"><TextField label="First name" value={billing.first_name} onChange={e => setBilling({...billing, first_name: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Last name" value={billing.last_name} onChange={e => setBilling({...billing, last_name: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Company" value={billing.company} onChange={e => setBilling({...billing, company: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Address line 1" value={billing.address_1} onChange={e => setBilling({...billing, address_1: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Address line 2" value={billing.address_2} onChange={e => setBilling({...billing, address_2: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="City" fullWidth value={billing.city} onChange={e => setBilling({...billing, city: e.target.value}) } size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Postcode / ZIP" value={billing.postcode} onChange={e => setBilling({...billing, postcode: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Country / Region" value={billing.country} onChange={e => setBilling({...billing, country: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="State / County" value={billing.state} onChange={e => setBilling({...billing, first_name: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Email address" value={billing.email} onChange={e => setBilling({...billing, email: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Phone" fullWidth value={billing.last_name} onChange={e => setBilling({...billing, last_name: e.target.value}) } size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Payment method:" fullWidth size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Transaction ID" fullWidth size="small"></TextField></Grid>
      </Grid>
    </>
  );
};

export default OsOrderBilling;