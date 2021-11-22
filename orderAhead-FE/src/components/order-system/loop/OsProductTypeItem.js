import React, { useEffect, useState } from 'react';
import {Select, MenuItem, FormControl, InputLabel} from '@mui/material'
import { osServices } from '../../../controllers/_services/ordersystem.service';
import { formatPrice } from '../ultility';
import OsLoading from '../OsLoading'

const OsProductTypeItem = (props) => {
  const className = "os-type-item"
  const type = props.data

  const [isBrandLoading, setBrandLoading] = useState(false)

  const [selectedBrand, chooseBrand] = useState('')
  const [brands, setBrands] = useState([])
  const params = {type: type.name}
  useEffect(() => {
    setBrandLoading(true)
    osServices.osLoadBrands(params).then(response => {
      setBrands(response.data)
      setBrandLoading(false)
    })
  }, [])

  const handleChange = (e) => {
    chooseBrand(e.target.value)
  }
  return (
    <div className={`${className}`}>
      <div className={`${className}__photo`}>
        <img src={type.thumbnail} width="100%" />
      </div>
      <div className={`${className}__info`}>
        <div className={`${className}__name`}>
          {type.name}
        </div>
        <div className={`${className}__price-range`}>
          Price Range: {formatPrice(type.price_range.from)} - {formatPrice(type.price_range.to)}
        </div>
        <div className={`${className}__brand`}>
          <FormControl fullWidth>
            <InputLabel id={`brand-select-${type.handle}`}>Brand</InputLabel>
            <Select
              labelId={`brand-select-${type.handle}`}
              id="demo-simple-select"
              value={selectedBrand}
              label="Age"
              onChange={handleChange}
            >
              {isBrandLoading && <OsLoading />}
              {!isBrandLoading && brands.map(brand => <MenuItem value={brand.handle}>{brand.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default OsProductTypeItem;