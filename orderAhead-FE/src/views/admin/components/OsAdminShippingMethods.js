import { Button, TableCell, TableRow, Table, TableHead, TableBody, TableFooter, Switch } from '@mui/material';
import React, {useState} from 'react';
import OsAddShippingDialog from './OsAddShippingDialog'
import OsUpdateShippingDialog from './OsUpdateShippingDialog';

const OsAdminShippingMethods = (props) => {
  const {zone} = props
  const [open, setOpen] = React.useState(false);

  const [shippingMethods, setShippingMethods] = useState([
  ])


  const handleAddShippingMethodClicked = () => {
    setOpen(true)
  }

  const handleDialogClosed = (value) => {
    alert(value)
    setOpen(false)
  }


  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Enable</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shippingMethods.length > 0 && shippingMethods.map(
            shippingMethod => {
              return <TableRow key={shippingMethod.id}>
                <TableCell>{shippingMethod.title}</TableCell>
                <TableCell><Switch defaultChecked /></TableCell>
              </TableRow>
            })
          }
          {shippingMethods.length==0 && <TableRow>
            <TableCell colSpan="2">You can add multiple shipping methods within this zone. Only customers within the zone will see them.</TableCell>
          </TableRow>}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell><Button onClick={handleAddShippingMethodClicked}>Add shipping method</Button></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <OsAddShippingDialog onDialogClosed={handleDialogClosed} isOpen={open} />
      <OsUpdateShippingDialog isOpen={false} />
    </div>
  );
};

export default OsAdminShippingMethods;