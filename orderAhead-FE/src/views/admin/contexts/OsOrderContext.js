import React, { useContext, useState } from 'react';

const OsCustomerContext = React.createContext()
const OsBillingContext = React.createContext()
const OsShippingContext = React.createContext()
const OsItemsContext = React.createContext()

export const useCustomerContext = (initialValue) => {
  const [,setCustomer] = useContext(OsCustomerContext)
  return [initialValue, setCustomer]
}

export const useBillingContext = (initialValue) => {
  const [,setBilling] = useContext(OsBillingContext)
  return [initialValue,setBilling]
}

export const useShippingContext = (initialValue) => {
  const [,setShipping] = useContext(OsShippingContext)
  return [initialValue,setShipping]
}

export const useItemsContext = (initialValue) => {
  const [,setItems] = useContext(OsItemsContext)
  return [initialValue,setItems]
}

const OsCreateOrderProvider = ({children}) => {
  const [customer, setCustomer] = useState(false)
  const [billing, setBilling] = useState(false)
  const [shipping, setShipping] = useState(false)
  const [items, setItems] = useState(false)

  return (
    <OsCustomerContext.Provider value={[customer, setCustomer]}>
      <OsBillingContext.Provider value={[billing, setBilling]}>
        <OsShippingContext.Provider value={[shipping, setShipping]}>
          <OsItemsContext.Provider value={[items, setItems]}>
            {children}
          </OsItemsContext.Provider>
        </OsShippingContext.Provider>
      </OsBillingContext.Provider>
    </OsCustomerContext.Provider>
  );
};


export default OsCreateOrderProvider;