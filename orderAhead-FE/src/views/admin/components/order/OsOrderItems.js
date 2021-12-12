import React, { useState } from 'react';
import {Box, Button, Card, CardContent, CardActions} from '@mui/material'
import {Table, TableHead, TableBody, TableFooter, TableRow, TableCell} from '@mui/material'
import OsAddProductDialog from './OsAddProductDialog'
import { formatPrice } from '../../../../components/order-system/ultility';

const OsOrderItems = () => {
  const [isAddingBarShown, showAddingBar] = useState(false)
  const [isAddProductDialogShown, showAddProductDialog] = useState(false)
  const [items, setItems] = useState([])
  const handleAddProductClicked = (e) => {
    showAddProductDialog(true)
  }
  const handleProductAdded = (product, qty) => {
    showAddProductDialog(false)
    let hasAlreadyAdded = false

    let updatedItems = items.map(item => {
      if (item.product.sku == product.sku) {
        item.qty += qty
        hasAlreadyAdded = true
      }
      return item
    })

    if (!hasAlreadyAdded) {
      updatedItems = [...items, {
        product: product,
        qty: qty
      }]
    }

    setItems(updatedItems)
  }
  return (
    <>
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
              {items.map(item =>
                <TableRow>
                  <TableCell width="80"><img src={item.product.thumbnail} width="50" /></TableCell>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell width="5%">{formatPrice(item.product.price)}</TableCell>
                  <TableCell width="5%">× {item.qty}</TableCell>
                  <TableCell width="5%">{formatPrice(item.qty*item.product.price)}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

        </CardContent>
        <CardActions>
          {!isAddingBarShown && <Button variant="outlined" size="small" onClick={(e) => showAddingBar(true)}>Add item(s)</Button>}
          {isAddingBarShown && <Box class="d-flex justify-content-end w-100">
            <Button variant="outlined" size="small" onClick={handleAddProductClicked}>Add product(s)</Button>
            <Button variant="outlined" size="small" className="ml-2">Add shipping</Button>
            <Button variant="outlined" size="small" className="ml-2" onClick={e => showAddingBar(false)}>Cancel</Button>
            <Button variant="contained" size="small" className="ml-2">Save</Button>
          </Box>}
        </CardActions>
      </Card>

      <OsAddProductDialog open={isAddProductDialogShown} onClose={e => showAddProductDialog(false)} onProductAdded={handleProductAdded} />
    </>
  );
};

export default OsOrderItems;