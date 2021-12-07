import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Select, MenuItem, Divider, Button } from '@mui/material';
import React, {useState} from 'react';
import PropTypes from 'prop-types'

const OsUpdateShippingDialog = (props) => {
  const {onDialogClosed, isOpen} = props
  const predefinedShippingMethods = [
    {id: 'flat_rate', title: 'Flat rate'},
    {id: 'free_shipping', title: 'Free shipping'},
    {id: 'local_pickup', title: 'Local pickup'},
  ]

  const defaultShippingMethod = 'flat_rate'
  const [shippingMethod, setShippingMethod] = useState(defaultShippingMethod)
  const handleShippingMethodChanged = (e) => {
    setShippingMethod(e.target.value)
  }

  const handleClose = () => {
    onDialogClosed(false)
  }

  const handleAddShippingClicked = (e) => {
    onDialogClosed(shippingMethod)
    setShippingMethod(defaultShippingMethod)
  }

  return <Dialog onClose={handleClose} open={isOpen}>
        <DialogTitle>Add shipping method</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose the shipping method you wish to add. Only shipping methods which support zones are listed.</DialogContentText>
          <Select fullWidth className="mt-2 mb-1" value={shippingMethod} onChange={handleShippingMethodChanged}>
            {predefinedShippingMethods.map(method => <MenuItem key={method.id} value={method.id}>{method.title}</MenuItem>)}
          </Select>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button variant={'contained'} onClick={handleAddShippingClicked}>Add shipping method</Button>
        </DialogActions>
      </Dialog>
}

OsUpdateShippingDialog.propTypes = {
  onDialogClosed: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default OsUpdateShippingDialog