import React from 'react';
import OsWidegetSliderCategories from '../widgets/OsWidegetSliderCategories';
import OsWidgetSliderProductTypes from '../widgets/OsWidgetSliderProductTypes';
import { useSelector } from 'react-redux';

const OsHomePage = () => {
  const categories = useSelector(state => state.categories)

  return (
    <div>
      <OsWidegetSliderCategories />
      {categories.map(category => <OsWidgetSliderProductTypes data={category} />)}
    </div>
  );
};

export default OsHomePage;