import { useConfig } from "../../config";

const config = useConfig()
const serverURL = config.serverUrl

export const osServices = {
  osLoadCategories,
  osLoadBrands,
  osLoadProducts,
  osLoadProduct,
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

  return fetch(`${serverURL}/ordersystem/${path}`, requestOptions).then(handleResponse);
}

function osLoadCategories() {
  return callApi('loadCategories')
}

function osLoadBrands() {
  return callApi('loadBrands')
}

function osLoadProducts(params) {
  return callApi('loadProducts', params)
}

function osLoadProduct(params) {
  return callApi('loadProduct', params)
}