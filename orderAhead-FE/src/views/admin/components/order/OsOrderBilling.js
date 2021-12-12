import React from 'react';
import {TextField, Typography, Grid, Select} from '@mui/material'

const OsOrderBilling = () => {
  return (
    <>
      <Typography>Billing</Typography>
      <Grid container spacing={2}>
        <Grid item xs="6"><TextField label="First name" fullWidth size="small"></TextField></Grid>
        <Grid item xs="6"><TextField label="Last name" fullWidth size="small"></TextField></Grid>
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