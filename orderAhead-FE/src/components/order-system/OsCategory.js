import React from 'react';
import OsProductItem from './loop/OsProductItem';
import OsProductList from './OsProductList';
import OsSidebar from './OsSidebar';

const OsCategory = () => {
  return (
    <div className="os-layout os-layout--2columns-left">
      <div className="os-layout__sidebar">
        <OsSidebar></OsSidebar>
      </div>
      <div className="os-layout__main">
        <OsProductList>
          <OsProductItem></OsProductItem>
          <OsProductItem></OsProductItem>
          <OsProductItem></OsProductItem>
        </OsProductList>
      </div>
    </div>
  );
};

export default OsCategory;