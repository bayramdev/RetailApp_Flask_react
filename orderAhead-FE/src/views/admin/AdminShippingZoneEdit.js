import React, { useEffect, useState } from 'react';
import {Chip, Box, Select, TextField, Button, Table, TableBody, TableHead, TableRow, TableCell, MenuItem} from '@mui/material'
import {osServices} from '../../controllers/_services/ordersystem.service'
import OsLoading from '../../components/order-system/OsLoading'
import { useSelector } from 'react-redux';
import { useHistory, Link, useLocation } from 'react-router-dom';
import QueryString from 'query-string'
import {Country, State, City} from 'country-state-city'
import OsAdminShippingMethods  from './components/OsAdminShippingMethods'
import Formik from 'formik'

const AdminShippingZoneEdit = () => {
  const [zoneName, setZoneName] = useState('Everywhere')
  const [zoneLocations, setZoneLocations] = useState([])

  const [isLoading, setLoading] = useState(false)
  const {search} = useLocation()

  const params = QueryString.parse(search)
  const zoneId = params['zone_id']
  const states = State.getStatesOfCountry('US')

  const title = (params.zone_id == 'new')?'Add shipping zone': 'Edit shipping zone'
  const handleSaveClicked = (e) => {
    const formData = new FormData()
    formData.append('zone_id', zoneId)
    formData.append('zone_name', zoneName)
    zoneLocations.map(zoneLocation => formData.append('zone_locations', zoneLocation))

    osServices.osShippingZoneSaveChanges(formData).then(response => {
      console.log(response.data)
    })
  }

  const handleStateChanged = (e) => {
    setZoneLocations(e.target.value);
  }

  return (
    <div>
      <h1>{title}</h1>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell width={220}>Zone name</TableCell>
            <TableCell><TextField value={zoneName}></TextField></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>The United State Regions</TableCell>
            <TableCell>
              <Select style={{width:'300px'}} placeholder="Select a state" value={zoneLocations} multiple onChange={handleStateChanged}>
                <MenuItem disabled value="">
                  <em>Select a state</em>
                </MenuItem>
                {states.map(state => <MenuItem key={state.name} value={`${state.isoCode}`}>{state.name}</MenuItem>)}
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Shipping method(s)</TableCell>
            <TableCell>
              <OsAdminShippingMethods zone={zoneId} methods={[]}  />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell><Button onClick={handleSaveClicked} variant={'contained'}>Save</Button></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminShippingZoneEdit;