import React from 'react';
import {Link} from 'react-router-dom';
import OsIconCart from '../icons/OsIconCart';
import OsIconLeft from '../icons/OsIconLeft';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const OsProductPage = () => {
  const photoUrl = 'https://images.dutchie.com/2827033aae533a185698f0bd5f0a764f?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=344&w=344&q=75&dpr=1'
  const brand = 'BEST FRIEND FARMS'
  const productName = 'Shart'
  const options = [
    {weight: '1/8 oz', price: '$35.00'},
    {weight: '1/4 oz', price: '$65.00'},
  ]
  const note = '*Cannabis tax will be added at checkout.'
  const tags = ['Hybrid']
  const productDesc = 'Dried cannabis flower is primarily ingested via inhalation. Activation time is roughly about 5 minutes and can last up to a few hours.'

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="os-container">
        <div className="os-layout os-layout--1column">
          <div className="os-layout__main">
            <Link to="/order/brands"><OsIconLeft /> Back</Link>
            <div class="os-product">
              <div class="os-product__photo">
                <img src={photoUrl} />
              </div>
              <div class="os-product__details">
                <div class="os-product__brand">{brand}</div>
                <div class="os-product__name">{productName}</div>
                <div class="os-product__options os-product-option-list">
                  {options.map(option =>
                    <div class="os-product-option">
                      <div class="os-product-option__weight">{option.weight}</div>
                      <div class="os-product-option__price">{option.price}</div>
                    </div>
                  )}
                </div>
                <div class="os-product__addtocart os-addtocart">
                  <div class="os-addtocart__qty">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div class="os-addtocart__button-wrapper">
                    <button class="os-addtocart__button">
                      <OsIconCart></OsIconCart>
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
                <div class="os-product__note">{note}</div>
                <div class="os-product__tags">
                  {tags.map(tag =>
                    <div class="os-product-tag">{tag.name}</div>
                  )}
                </div>
                <div class="os-product__desc">
                  {productDesc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OsProductPage;