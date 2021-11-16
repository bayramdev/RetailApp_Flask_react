import React from 'react';
import {Link} from 'react-router-dom';
import OsIconLeft from '../icons/OsIconLeft';
import OsAddToCart from '../parts/OsAddToCart';


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


  return (
    <>
      <div className="os-container">
        <div className="os-layout os-layout--1column">
          <div className="os-layout__main">
            <Link className="os-goback" to="/order/brands"><OsIconLeft /> Back</Link>
            <div className="os-product row">
              <div className="os-product__photo col-5">
                <img src={photoUrl} />
              </div>
              <div className="os-product__details col-7">
                <div className="os-product__brand">{brand}</div>
                <div className="os-product__name">{productName}</div>
                <div className="os-product__options os-product-option-list">
                  {options.map(option =>
                    <div className="os-product-option os-product-item-button">
                      <div className="os-product-option__weight os-product-item-button__weight">{option.weight}</div>
                      <div className="os-product-option__price os-product-item-button__price">{option.price}</div>
                    </div>
                  )}
                </div>
                <div className="os-product__addtocart">
                  <OsAddToCart />
                </div>
                <div className="os-product__note">{note}</div>
                <div className="os-horz-line" />
                <div className="os-product__tags">
                  {tags.map(tag =>
                    <div className="os-product-tag"><span>{tag}</span></div>
                  )}
                </div>
                <div className="os-product__desc">
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