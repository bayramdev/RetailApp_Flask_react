import React, { useState, useEffect } from 'react';
import {Box, Card, CardContent, Button, CardActions, Typography} from '@mui/material'
import { osServices } from '../../../../controllers/_services/ordersystem.service';
import {useCustomerContext, useBillingContext, useShippingContext, useItemsContext} from './../../contexts/OsOrderContext'

const OsOrderActions = () => {
  const [data, setData] = useState({
    customer: {},
    billing: {},
    shipping: {},
    items: [],
  })

  const [customer,] = useCustomerContext(false)
  const [billing,] = useBillingContext(false)
  const [shipping,] = useShippingContext(false)
  const [items,] = useItemsContext(false)


  useEffect(() => {
    if (customer) {
      setData({...data, customer: customer})
    }
    if (billing) {
      setData({...data, billing: billing})
    }
    if (shipping) {
      setData({...data, shipping: shipping})
    }
    if (items) {
      setData({...data, items: items})
    }
  }, [customer, billing, shipping, items])

  const handleCreateClicked = (e) => {
    const formData = new FormData()
    formData.append('data', JSON.stringify(data))
    osServices.osCreateOrder(formData).then(response => {
      console.log(response.data)
    })
  }



  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" style={{borderBottom: '1px solid #ccc'}}>Order actions</Typography>
        </CardContent>
        <CardActions>
          <Box class="d-flex justify-content-end w-100">
            <Button variant="contained" onClick={handleCreateClicked}>Create</Button>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};

export default OsOrderActions;