import React from 'react';
import OsProductItem from '../loop/OsProductItem';
import OsProductList from '../OsProductList';
import OsSidebar from '../OsSidebar';
import OsContentHeader from '../OsContentHeader';
import OsWidgetCategories from '../widgets/OsWidgetCategories';

const OsBrandPage = () => {
  return (
    <>
      <div className="os-container">
        <div className="os-layout os-layout--2columns-left">
          <div className="os-layout__sidebar">
            <OsSidebar></OsSidebar>
          </div>
          <div className="os-layout__main">
            <OsContentHeader></OsContentHeader>
            <OsProductList>
              <OsProductItem></OsProductItem>
              <OsProductItem></OsProductItem>
              <OsProductItem></OsProductItem>
            </OsProductList>
          </div>
        </div>
      </div>
      <div className="os-layout">
        <OsWidgetCategories></OsWidgetCategories>
      </div>
    </>
  );
};

export default OsBrandPage;