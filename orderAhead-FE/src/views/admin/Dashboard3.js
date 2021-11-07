import React from 'react'
import SalesByDay from '../../components/chart/SalesByDay'
import SalesByDayAndCategory from '../../components/chart/SalesByDayAndCategory'

const Dashboard3 = () => {
  return (
    <>
      <h1>Dashboard 3</h1>

      <div class="row">
        <div class="col-4">Column 1</div>
        <div class="col-8">
          <SalesByDayAndCategory />
        </div>
      </div>
      <div class="row">
        <div class="col-4">Column 2</div>
        <div class="col-8">
          <SalesByDay />
        </div>
      </div>
    </>
  )
}

export default Dashboard3