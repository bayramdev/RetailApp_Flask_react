import React, { useEffect, useState } from 'react';
import OsProductItem from '../loop/OsProductItem';
import OsProductList from '../OsProductList';
import OsSidebar from '../OsSidebar';
import OsContentHeader from '../OsContentHeader';
import OsWidgetCategories from '../widgets/OsWidgetCategories';
import OsLoading from '../OsLoading';
import { osServices } from '../../../controllers/_services/ordersystem.service';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import QueryString from 'query-string'

const OsProductListPage = (props) => {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const {search} = useLocation();
  const params = QueryString.parse(search)

  let title = []
  if (params.category) {
    title.push(params.category)
  }

  if (params.brand) {
    title.push(params.brand)
  }

  if (params.type) {
    title.push(params.type)
  }

  title = title.join(' > ')



  useEffect(() => {
    setLoading(true)

    osServices.osLoadProducts(params).then((response) => {
      setProducts(response.data)
      setLoading(false)
    })
  }, [search])

  // console.log(category)

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
            <OsProductList>
              {products.length == 0 && <div className="mt-3">There is no product.</div>}
              {products.map(product => <OsProductItem key={product.sku} data={product} />)}
            </OsProductList>}
          </div>
        </div>
      </div>
      <div className="os-layout">
        <OsWidgetCategories />
      </div>
    </>
  );
};

export default OsProductListPage;