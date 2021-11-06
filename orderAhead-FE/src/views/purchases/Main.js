import React, {useEffect} from 'react'
import PurchaseGroup from './PurchaseGroup'
import { userService } from '../../controllers/_services';

const Main = () => {
  useEffect(() => {
    userService.getLastPurchasesByDate(9).then(data => {
      console.log('data')
      console.log(data)
    })
  }, [])

  return (
    <div style={styles.main}>
      <h1 style={styles.main__heading}>Pass Purchases by Date</h1>
      <PurchaseGroup />
    </div>
  )
}

const styles = {
  main: {
    paddingLeft: '40px',
    paddingRight: '40px',
    marginTop: '60px',
    color: '#000000',
  },
  main__heading: {
    fontSize: '20px',
    paddingTop: '20px',
    marginBottom: '30px',
  },
}

export default Main