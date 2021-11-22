import React, { useEffect, useState } from 'react';
import OsLoading from '../../components/order-system/OsLoading';
import { osServices } from '../../controllers/_services/ordersystem.service';
import {Table, TableBody, TableHead, TableRow, TableCell, Button} from '@mui/material'
import { useHistory } from 'react-router-dom';

const AdminTypeManage = () => {
  const [productTypes, setProductTypes] = useState([])
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    osServices.osLoadTypes({}).then(response => {
      setProductTypes(response.data)
      setLoading(false)
    })
  }, [])

  const history = useHistory()

  const handleEditClicked = (e) => {
    const target = e.target.getAttribute('target')
    history.push('/type?name=' + target)
  }


  return (
    <div>

        <>
          <h1>Product Type Management</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width="100">Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price From</TableCell>
                <TableCell>Price To</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && <OsLoading />}
              {!isLoading && productTypes.map(productType =>
                <TableRow>
                  <TableCell onClick={handleEditClicked}><img src={productType.thumbnail} width="100%"/></TableCell>
                  <TableCell onClick={handleEditClicked}>{productType.name}</TableCell>
                  <TableCell>{productType.price_range.from}</TableCell>
                  <TableCell>{productType.price_range.to}</TableCell>
                  <TableCell align="right"><Button variant="text" target={productType.name} onClick={handleEditClicked}>Edit</Button></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </>

    </div>
  );
};

export default AdminTypeManage;