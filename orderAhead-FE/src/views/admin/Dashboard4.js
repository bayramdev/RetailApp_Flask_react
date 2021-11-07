import React from 'react'
import LbsSoldByMonthAndBrand from '../../components/chart/LbsSoldByMonthAndBrand'
import LbsSoldByMonthAndProfile from '../../components/chart/LbsSoldByMonthAndProfile'
import DatatableMonth from '../../components/datatable/DatatableMonth'
import DatatableProfile from '../../components/datatable/DatatableProfile'
import DatatableStrain from '../../components/datatable/DatatableStrain'

const Dashboard4 = () => {
  return (
    <>
      <h1>Dashboard4</h1>

      <div class="row">
        <div class="col-4">
          <DatatableProfile />
        </div>
        <div class="col-8">
          <LbsSoldByMonthAndBrand />
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-4">
              <DatatableMonth />
            </div>
            <div class="col-8">
              <DatatableStrain />
            </div>
          </div>
        </div>
        <div class="col-8">
          <LbsSoldByMonthAndProfile />
        </div>
      </div>
    </>
  )
}

export default Dashboard4