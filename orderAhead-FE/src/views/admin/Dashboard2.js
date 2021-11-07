import React from 'react'
import SalesByMonth from '../../components/chart/SalesByMonth'
import SalesByWeekInYear from '../../components/chart/SalesByWeekInYear'
import SalesByWeekInYearAndMonth from '../../components/chart/SalesByWeekInYearAndMonth'

const Dashboard2 = () => {
  return (
    <>
      <h1>Dashboard 2</h1>

      <div class="row">
        <div class="col-4">Column 1</div>
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <SalesByWeekInYear />
            </div>
            <div class="col-6">
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <SalesByMonth />
            </div>
            <div class="col-6">
              <SalesByWeekInYearAndMonth />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard2