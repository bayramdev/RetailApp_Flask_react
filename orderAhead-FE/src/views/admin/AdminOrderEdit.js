import React from 'react';
import OsOrderData from './components/order/OsOrderData'
import OsOrderItems from './components/order/OsOrderItems'
import OsOrderActions from './components/order/OsOrderActions'
import { Grid, Divider, Typography } from '@mui/material'

const AdminOrderEdit = () => {
  return (
    <>
      <Typography variant="h3" class="mb-3">Add new order</Typography>
      <Grid container columnSpacing={5} rowSpacing={3}>
        <Grid item xs={9}>
          <OsOrderData />
        </Grid>
        <Grid item xs={3}>
          <Divider />
          <OsOrderActions />
        </Grid>
        <Grid item xs={9}>
          <OsOrderItems />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminOrderEdit;