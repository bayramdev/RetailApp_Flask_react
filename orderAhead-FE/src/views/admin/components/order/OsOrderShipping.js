import React, {useEffect, useState} from 'react';
import {Button, TextField, Typography, Grid, Select} from '@mui/material'
import { useShippingContext, useBillingContext, useCustomerContext } from '../../contexts/OsOrderContext';

const OsOrderShipping = () => {
  const [customer,] = useCustomerContext(false)
  const [selectedCustomer, setSelectedCustomer] = useState(customer)
  const [selectedBilling, setSelectedBilling] = useState(false)
  const [shipping, setShipping] = useShippingContext({
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

  const [billing, ] = useBillingContext(false)

  let handleLoadShippingAddress = e => {
    if (!selectedCustomer) {
      alert('No customer selected')
      return
    }

    setShipping({
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

  const handleCopyBillingAddress = e => {
    setShipping(selectedBilling)
  }

  useEffect(() => {
    setSelectedCustomer(customer)
    setSelectedBilling(billing)
  }, [customer, billing])


  return (
    <>
      <Typography>Shipping</Typography>

      <Grid container spacing={2}>
        <Grid item xs="12">
          <Button onClick={handleLoadShippingAddress} size="small" variant="outlined">Load shipping address</Button>
          <Button onClick={handleCopyBillingAddress} size="small" variant="outlined" className="ml-2">Copy billing address</Button>
        </Grid>
        <Grid item xs="6"><TextField label="First name" value={shipping.first_name} onChange={e => setShipping({...shipping, first_name: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Last name" value={shipping.last_name} onChange={e => setShipping({...shipping, last_name: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="12"><TextField label="Company" value={shipping.company} onChange={e => setShipping({...shipping, company: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Address line 1" value={shipping.address_1} onChange={e => setShipping({...shipping, address_1: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Address line 2" value={shipping.address_2} onChange={e => setShipping({...shipping, address_2: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="City" fullWidth value={shipping.city} onChange={e => setShipping({...shipping, city: e.target.value}) } size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Postcode / ZIP" value={shipping.postcode} onChange={e => setShipping({...shipping, postcode: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Country / Region" value={shipping.country} onChange={e => setShipping({...shipping, country: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="State / County" value={shipping.state} onChange={e => setShipping({...shipping, first_name: e.target.value}) } fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Phone" fullWidth value={shipping.last_name} onChange={e => setShipping({...shipping, last_name: e.target.value}) } size="small"></TextField></Grid>
      </Grid>
    </>
  );
};

export default OsOrderShipping;