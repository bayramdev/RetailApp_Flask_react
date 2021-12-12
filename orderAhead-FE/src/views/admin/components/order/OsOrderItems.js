import React from 'react';
import {Button, Card, CardContent, CardActions} from '@mui/material'
import {Table, TableHead, TableBody, TableFooter, TableRow, TableCell} from '@mui/material'

const OsOrderItems = () => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan="2">Item</TableCell>
              <TableCell width="5%">Cost</TableCell>
              <TableCell width="5%">Qty</TableCell>
              <TableCell width="5%">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><img src={'/img/default_product.jpg'} width="50" /></TableCell>
              <TableCell>Product name</TableCell>
              <TableCell width="5%">$0.00</TableCell>
              <TableCell width="5%">× 1</TableCell>
              <TableCell width="5%">$0.00</TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
            <TableCell><img src={'/img/default_product.jpg'} width="50" /></TableCell>
              <TableCell>Shipping method</TableCell>
              <TableCell width="5%"></TableCell>
              <TableCell width="5%"></TableCell>
              <TableCell width="5%">$0.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Add item(s)</Button>
      </CardActions>
    </Card>
  );
};

export default OsOrderItems;