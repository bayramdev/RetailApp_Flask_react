import React from 'react';

const OsCategoryItem = () => {
  const photoUrl = 'https://images.dutchie.com/category-stock-photos/flower/flower-2.png'
  const categoryName = 'Flower'
  return (
    <div className="os-category-item">
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