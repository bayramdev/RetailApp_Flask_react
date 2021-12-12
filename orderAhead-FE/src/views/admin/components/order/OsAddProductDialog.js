import React, {useEffect, useState} from 'react';
import {Table, TableHead, TableBody, TableCell, TableRow} from '@mui/material'
import {Autocomplete , Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material'
import { osServices } from '../../../../controllers/_services/ordersystem.service';

const OsAddProductDialog = (props) => {
  const [product, setProduct] = useState('')
  const [options, setOptions] = useState([
  ])
  const [qty, setQty] = useState(1)
  const handleAddClicked = (e) => {
    props.onProductAdded(product, qty)
  }
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const params = {}
    osServices.osLoadProducts(params).then((response) => {
      const products = response.data
      let productOptions = []
      products.map(product => productOptions.push({
        label: product.name,
        product: product
      }))
      setOptions(productOptions)
      setLoading(false)
    })
  }, [])


  return (
    <Dialog open={props.open} fullWidth={true} maxWidth={'sm'} onClose={props.onClose}>
      <DialogTitle>Add products</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell width="30%">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Autocomplete id="test" options={options} autoHighlight size="small"
                  renderInput={(params) => <TextField {...params} label="Select product" />}
                  onChange={(event, newValue) => {
                    setProduct(newValue.product)
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField label="Quantity" size="small" fullWidth value={qty} onChange={e => setQty(e.target.value)}></TextField>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddClicked} variant="contained">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OsAddProductDialog;