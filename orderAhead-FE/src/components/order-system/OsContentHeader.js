import React from 'react';

const OsContentHeader = (props) => {
  return (
    <div className="os-content-header">
      <h2 className="os-content-header__heading">{props.data?.title}</h2>
      <div className="os-content-header__filters"></div>
    </div>
  );
};

export default OsContentHeader;