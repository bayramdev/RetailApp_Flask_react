import { useConfig } from "../../config";
import axios from 'axios';

const config = useConfig()
const serverURL = config.serverUrl

export const osServices = {
  osLoadCategories,
  osLoadBrands,
  osLoadProducts,
  osLoadTypes,
  osLoadProduct,
  osLoadType,
  osUpdateType,
};

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              // logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

const callApi = (path, params) => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  if (params) {
    requestOptions.method = 'POST'
    requestOptions.body = JSON.stringify(params)
  }

  return fetch(`${serverURL}/${path}`, requestOptions).then(handleResponse);
}



function osLoadCategories() {
  return callApi('ordersystem/loadCategories')
}

function osLoadBrands(params) {
  return callApi('ordersystem/loadBrands', params)
}
function osLoadTypes(params) {
  return callApi('ordersystem/loadTypes', params)
}

function osLoadProducts(params) {
  return callApi('ordersystem/loadProducts', params)
}

function osLoadProduct(params) {
  return callApi('ordersystem/loadProduct', params)
}

function osLoadType(params) {
  return callApi('ordersystem/osLoadType', params)
}

function osUpdateType(formData) {
  const path = 'ordersystem/osUpdateType'
  return axios.post(`${serverURL}/${path}`, formData)
}