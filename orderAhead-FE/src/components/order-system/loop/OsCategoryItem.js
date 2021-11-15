import React from 'react';
import { useHistory } from 'react-router-dom';

const OsCategoryItem = () => {
  const photoUrl = 'https://images.dutchie.com/category-stock-photos/flower/flower-2.png'
  const categoryName = 'Flower'
  const history = useHistory()
  return (
    <div className="os-category-item" onClick={() => history.push('/order/products')}>
      <div className="os-category-item__info">
        <div className="os-category-item__shop">Shop</div>
        <div className="os-category-item__name">{categoryName}</div>
      </div>
      <div className="os-category-item__photo">
        <img className="os-category-item__img" src={photoUrl} />
      </div>
    </div>
  );
};

export default OsCategoryItem;