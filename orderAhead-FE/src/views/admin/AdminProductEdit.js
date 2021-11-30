import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string'
import { osServices } from '../../controllers/_services/ordersystem.service';
import OsLoading from '../../components/order-system/OsLoading';
import { Button, Table, TableBody } from '@mui/material';
import OsAdminProductMediaManage from './components/OsAdminProductMediaManage';

const AdminProductEdit = () => {
  const {search} = useLocation()
  const params = QueryString.parse(search)
  const [product, setProduct] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isUploading, setUploading] = useState(false)

  useEffect(() => {
    setLoading(true)
    osServices.osLoadProduct({sku: params.sku}).then(response => {
      setProduct(response.data)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      {isLoading && <OsLoading />}
      {!isLoading && product && <>
        <div class="d-flex align-items-center"><h2 class="mr-3">Media management for product </h2>{product.name}</div>

        <OsAdminProductMediaManage sku={params.sku} data={product.images} />
      </>}
    </div>
  );
};

export default AdminProductEdit;