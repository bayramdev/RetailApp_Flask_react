import React from 'react'
import SalesByMonth from '../../components/chart/SalesByMonth'
import SalesByWeekInYear from '../../components/chart/SalesByWeekInYear'
import SalesByWeekInYearAndMonth from '../../components/chart/SalesByWeekInYearAndMonth'
import DatatableCategory from '../../components/datatable/DatatableCategory'
import DatatableMonth from '../../components/datatable/DatatableMonth'

const Dashboard2 = () => {
  return (
    <>
      <h1>Dashboard 2</h1>

      <div class="row">
        <div class="col-4">
          <DatatableCategory />
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-8">
              <SalesByWeekInYear />
            </div>
            <div class="col-4">
              <DatatableMonth />
            </div>
          </div>

          <div class="row">
            <div class="col-5">
              <SalesByMonth />
            </div>
            <div class="col-7">
              <SalesByWeekInYearAndMonth />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard2