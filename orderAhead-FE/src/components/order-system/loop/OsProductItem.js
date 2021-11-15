import React from 'react';
import OsButtonAdd from './OsButtonAdd';
import {useHistory} from 'react-router-dom';

const OsProductItem = (props) => {
  const history = useHistory();
  const className = "os-product-item"
  const gotoProduct = () => {
    history.push('/order/product')
  }
  return (
      <div className={className}>
        <div className={`${className}__info`} onClick={gotoProduct}>
          <div className={`${className}__photo`}>
            <img src={'https://images.dutchie.com/2827033aae533a185698f0bd5f0a764f?auto=format&fit=fill&fill=solid&fillColor=%23fff&__typename=ImgixSettings&ixlib=react-9.0.2&h=100&w=100&q=75&dpr=1'} />
          </div>
          <div className={`${className}__details`}>
            <div className={`${className}__brand`}>Best Friend Farms</div>
            <div className={`${className}__name`}>Shart</div>
            <div className={`${className}__features`}>
              <div className={`${className}__strain`}>Strain</div>
              <div className={`${className}__potency`}><span className={`${className}__label`}>THC:</span>&nbsp;25%</div>
            </div>
          </div>
        </div>
        <div className={`${className}__actions`}>
          <OsButtonAdd className={`${className}__button`} />
        </div>
      </div>
  );
};

export default OsProductItem;