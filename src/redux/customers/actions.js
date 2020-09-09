import {
  LIST_CUSTOMERS,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  LIST_CUSTOMERS_SUCCESS,
  LIST_CUSTOMERS_FAILD,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILD,
  EDIT_CUSTOMER_SUCCESS,
  EDIT_CUSTOMER_FAILD
} from '../../constants/actionTypes'

export const ListCustomers = (customers) => ({
  type: LIST_CUSTOMERS,
  payload: customers
})
export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer
})
export const editCustomer = (customerId, customer) => ({
  type: EDIT_CUSTOMER,
  payload: {customerId,customer}
})
export const listCustomersSuccess = (customers) => ({
  type: LIST_CUSTOMERS_SUCCESS,
  payload: customers
})
export const listCustomersFaild = (msg) => ({
  type: LIST_CUSTOMERS_FAILD,
  payload: msg
})
export const addCustomerSuccess = (customer) => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer
})

export const addCustomerFaild = (msg) => ({
  type: ADD_CUSTOMER_FAILD,
  payload: msg
})
export const editCustomerSuccess = (customerId, customer) => ({
  type: EDIT_CUSTOMER_SUCCESS,
  payload: customerId,
  customer
})

export const editCustomerFaild = (msg) => ({
  type: EDIT_CUSTOMER_FAILD,
  payload: msg
})
