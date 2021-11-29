import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import OsLoading from '../../components/order-system/OsLoading';
import { osServices } from '../../controllers/_services/ordersystem.service';

const AdminProductManage = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(false)
  const params = {}
  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    osServices.osLoadProducts(params).then(response => {
      setProducts(response.data)
      setLoading(false)
    })
  }, [])

  const handleEditClick = (e) => {
    e.preventDefault()
    const sku = e.target.getAttribute('data-sku')
    history.push('/product?sku='+sku)
  }


  return (
    <div>
      <h1 class="mb-5">Product Management</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="5%"></TableCell>
            <TableCell>Product SKU</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <OsLoading />}
          {!isLoading && products.map(product =>
            <TableRow>
              <TableCell><img src={product.thumbnail} width="100" height="100" /></TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>
                <Button variant={'contained'} data-sku={product.sku} onClick={handleEditClick}>Edit</Button>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminProductManage;