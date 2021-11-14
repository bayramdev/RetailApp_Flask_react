import React from 'react'
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import OsIconCart from './icons/OsIconCart'
import OsCartPopup from './OsCartPopup';

const OsMinicart = () => {
  const anchor = 'right'
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
     <React.Fragment key={anchor}>
        <div className="os-minicart">
          <button className="os-minicart__button" onClick={toggleDrawer(anchor, true)}>
            <OsIconCart />
            <div className="os-minicart__itemcount">7</div>
          </button>

          <Drawer
            className="os-minicart__drawer"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <OsCartPopup />
          </Drawer>
        </div>
      </React.Fragment>
    </div>
  )
}

export default OsMinicart