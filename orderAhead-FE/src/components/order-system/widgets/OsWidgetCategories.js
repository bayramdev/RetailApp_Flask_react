import React from 'react';
import OsCategoryItem from '../loop/OsCategoryItem';

const OsWidgetCategories = () => {
  return (
    <div className="os-widget-categories">
      <div className="os-container">
        <h2 class="os-widget-categories__heading">Categories</h2>
        <div className="os-widget-categories__content os-category-list">
          <OsCategoryItem></OsCategoryItem>
          <OsCategoryItem></OsCategoryItem>
          <OsCategoryItem></OsCategoryItem>
          <OsCategoryItem></OsCategoryItem>
          <OsCategoryItem></OsCategoryItem>
          <OsCategoryItem></OsCategoryItem>
        </div>
      </div>
    </div>
  );
};

export default OsWidgetCategories;