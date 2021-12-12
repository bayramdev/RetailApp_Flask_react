import React from 'react';
import {Card, CardContent, Grid, Typography} from '@mui/material'
import OsOrderGeneral from './OsOrderGeneral'
import OsOrderBilling from './OsOrderBilling'
import OsOrderShipping from './OsOrderShipping'

const OsOrderData = ({children}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Order details</Typography>
        <Grid container spacing={2}>
          <Grid item md="4">
            <OsOrderGeneral></OsOrderGeneral>
          </Grid>
          <Grid item md="4">
            <OsOrderBilling></OsOrderBilling>
          </Grid>
          <Grid item md="4">
            <OsOrderShipping></OsOrderShipping>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OsOrderData;