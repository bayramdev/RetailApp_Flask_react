import React, { lazy, useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CButton,
    CPagination
} from '@coreui/react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userService } from '../../controllers/_services';
import { dbManageService } from '../../controllers/_services/dbmanage.service';
import { errorNotification, warningNotification, successNotification } from '../../controllers/_helpers';
import useTable from './../widgets/useTable';
import GoogleMap from './components/GoogleMap';

const AdminLocationMgr = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  dispatch({type: 'set', darkMode: false})

  
  useEffect(() => {
    if (isLoad === false) {
        let tempArray = [];
        setIsShows([...tempArray]);
        setIsLoad(true)
        }
    })

    const user = useSelector(state => state.user)
    const [isShows, setIsShows] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [latitude, setLatitude] = useState('55.583759');
    const [longitude, setLongitude] = useState('9.729960');

//   function onToggleOpen(index) {
//     let temps = [...isShows];
//     temps[index] = !temps[index]
//     setIsShows(temps)
//   }

  return (
    <>
      <CRow>
        <CCol className="pr-lg-1 pr-md-1 d-box-shadow1 d-border" sm="12" lg="12" md="12">
            <GoogleMap
                // isShows={isShows}
                // onToggleOpen={onToggleOpen}
                // goMetaEdit={goMetaEdit}
                // metaDatas={metaDatas}
                // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAyaRroGXXw-zWic_BrM7JPLzyTM2cc0V0&v=3.exp&libraries=geometry,drawing,places`}
                // loadingElement={<div style={{ height: `100%` }} />}
                // containerElement={<div style={{ height: `650px` }} />}
                // mapElement={<div style={{ height: `100%` }} />}
                // lat={latitude}
                // lng={longitude}
            />
        </CCol>
      </CRow>
    </>
  )
}

export default AdminLocationMgr
