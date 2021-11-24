import React, { useEffect, useState } from 'react';
import {TextField, Button, Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material'
import {osServices} from '../../controllers/_services/ordersystem.service'
import OsLoading from '../../components/order-system/OsLoading'
import { useSelector } from 'react-redux';
import { useHistory, Link, useLocation } from 'react-router-dom';
import QueryString from 'query-string'

const AdminShippingZoneForm = () => {
  const [shippingZones, setShippingZones] = useState([])
  const [isLoading, setLoading] = useState(false)
  const {search} = useLocation()

  const params = QueryString.parse(search)
  const title = (params.zone_id == 'new')?'Add shipping zone': 'Edit shipping zone'
  const handleSaveClicked = (e) => {
    const formData = new FormData()
  }

  return (
    <div>
      <h1>{title}</h1>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Zone name</TableCell>
            <TableCell><TextField value={''}></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Region(s)</TableCell>
            <TableCell><TextField></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shipping method(s)</TableCell>
            <TableCell><TextField></TextField></TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell><Button onClick={handleSaveClicked} variant={'contained'}>Save</Button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminShippingZoneForm;