import React from 'react';
import {Box, Card, CardContent, Button, CardActions, Typography} from '@mui/material'
import { osServices } from '../../../../controllers/_services/ordersystem.service';

const OsOrderActions = () => {
  const handleCreateClicked = (e) => {
    const formData = new FormData()
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