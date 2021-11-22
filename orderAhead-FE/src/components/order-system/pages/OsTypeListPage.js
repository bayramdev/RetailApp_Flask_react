import React from 'react';
import OsProductTypeItem from '../loop/OsProductTypeItem';
import OsSidebar from '../OsSidebar';
import OsContentHeader from '../OsContentHeader';
import OsWidgetCategories from '../widgets/OsWidgetCategories';
import OsLoading from '../OsLoading';
import { useSelector } from 'react-redux';


const OsTypeListPage = (props) => {
  const isLoading = useSelector(state => state.isLoading)
  const productTypes = useSelector(state => state.productTypes)
  const title = 'Product Types'

  return (
    <>
      <div className="os-container">
        <div className="os-layout os-layout--2columns-left">
          <div className="os-layout__sidebar">
            <OsSidebar />
          </div>
          <div className="os-layout__main">
            <OsContentHeader data={{title: title}} />
            {isLoading && <OsLoading />}
            {!isLoading &&
            <>
              {productTypes.length == 0 && <div className="mt-3">There is no type.</div>}
              {productTypes.map(type => <OsProductTypeItem key={type.handle} data={type} />)}
            </>}
          </div>
        </div>
      </div>
      <div className="os-layout">
        <OsWidgetCategories />
      </div>
    </>
  );
};

export default OsTypeListPage;