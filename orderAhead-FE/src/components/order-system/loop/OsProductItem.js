import React from 'react';
import OsButtonAdd from './OsButtonAdd';

const OsProductItem = (props) => {
  const className = "os-product-item"
  return (
    <div className={className}>
      <div className={`${className}__info`}>
        <div className={`${className}__photo`}>
          <img src={'https://images.dutchie.com/2827033aae533a185698f0bd5f0a764f?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=100&w=100&q=75&dpr=1'} />
        </div>
        <div className={`${className}__details`}>
          <div className={`${className}__brand`}>Best Friend Farms</div>
          <div className={`${className}__name`}>Shart</div>
          <div className={`${className}__strain`}>Strain</div>
        </div>
      </div>
      <div className={`${className}__actions`}>
        <OsButtonAdd />
      </div>
    </div>
  );
};

export default OsProductItem;