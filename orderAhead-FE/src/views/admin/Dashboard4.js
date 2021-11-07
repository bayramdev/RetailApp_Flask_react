import React from 'react'
import LbsSoldByMonthAndBrand from '../../components/chart/LbsSoldByMonthAndBrand'
import LbsSoldByMonthAndProfile from '../../components/chart/LbsSoldByMonthAndProfile'

const Dashboard4 = () => {
  return (
    <>
      <h1>Dashboard4</h1>

      <div class="row">
        <div class="col-4">Column 1</div>
        <div class="col-8">
          <LbsSoldByMonthAndBrand />
        </div>
      </div>
      <div class="row">
        <div class="col-4">Column 2</div>
        <div class="col-8">
          <LbsSoldByMonthAndProfile />
        </div>
      </div>
    </>
  )
}

export default Dashboard4