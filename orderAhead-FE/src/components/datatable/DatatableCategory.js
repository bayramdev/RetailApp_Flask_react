import React, { useEffect } from 'react'
import Datatable from '../Datatable'

const DatatableCategory = (props) => {
  useEffect(() => {

  }, [])

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Category',
        field: 'category',
        width: 100,
      },
      {
        label: 'Sales',
        field: 'sales',
      },
      {
        label: 'Units Sold',
        field: 'units_sold',
        width: 100,
      },
      {
        label: 'gms. sold',
        field: 'gms_sold',
        width: 100,
      },
    ],
    rows: [
    ],
  });

  return (
    <>
      <Datatable data={datatable} />
    </>
  )
}

export default DatatableCategory;