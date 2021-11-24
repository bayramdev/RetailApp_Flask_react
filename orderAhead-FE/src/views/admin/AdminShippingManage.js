import React, { useEffect, useState } from 'react';
import {Rating, Button, Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material'
import {osServices} from '../../controllers/_services/ordersystem.service'
import OsLoading from '../../components/order-system/OsLoading'
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

const AdminShippingManage = () => {
  const [shippingZones, setShippingZones] = useState([])
  const [isLoading, setLoading] = useState(false)
  const history = useHistory()

  const handleAddShippingZone = (e) => {
    history.push('/shipping_zone?zone_id=new')
  }

  return (
    <div>
      <h1>Shipping zones</h1>
      <Button onClick={handleAddShippingZone}>Add shipping zone</Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell width="20%">Zone name</TableCell>
            <TableCell width="auto">Region(s)</TableCell>
            <TableCell width="20%">Shipping method(s)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && <OsLoading />}
          {!isLoading && shippingZones.map(zone =>
            <TableRow>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminShippingManage;