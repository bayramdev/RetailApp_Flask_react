import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OsIconDown from '../icons/OsIconDown';
import OsIconRight from '../icons/OsIconRight';

const OsFilterBrands = () => {
  const [isCollapsed, setCollapsed] = useState(false)
  const handleClick = () => setCollapsed(!isCollapsed)
  return (
    <div class="os-sidebar-widget">
      <div class="os-sidebar-widget__header" onClick={handleClick}>
        <div class="os-sidebar-widget__heading">Brands</div>
        {isCollapsed && <OsIconRight />}
        {!isCollapsed && <OsIconDown />}
      </div>
      {!isCollapsed &&
      <div class="os-sidebar-widget__content">
        <ol class="os-sidebar-widget__list os-sidebar-list">
          <li class="os-sidebar-list__item"><Link className="os-sidebar-list__link" to="/order/brands">Brand1</Link></li>
          <li class="os-sidebar-list__item os-sidebar-list__item--active"><Link className="os-sidebar-list__link" to="/order/brands">Brand2</Link></li>
        </ol>
      </div>}
    </div>
  );
};

export default OsFilterBrands;