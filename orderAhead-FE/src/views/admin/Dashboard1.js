import React from 'react'
import SalesByCategory from '../../components/chart/SalesByCategory'
import SalesByDayOfWeek from '../../components/chart/SalesByDayOfWeek'
import SalesByWeekInYear from '../../components/chart/SalesByWeekInYear'
import SalesByWeekInYearAndCategory from '../../components/chart/SalesByWeekInYearAndCategory'

import Datatable from '../../components/Datatable'

const Dashboard1 = () => {
  return (
    <>
      <h1>Dashboard 1</h1>

      <div class="row">
        <div class="col-4">Column 1</div>
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <SalesByWeekInYear />
            </div>
            <div class="col-6">
              <SalesByWeekInYearAndCategory />
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <SalesByDayOfWeek />
            </div>
            <div class="col-6">
              <SalesByCategory />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard1