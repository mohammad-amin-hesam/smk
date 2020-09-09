import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  LIST_CUSTOMERS,
  ADD_CUSTOMER,
  EDIT_CUSTOMER,
  EDIT_CUSTOMER_FAILD,
} from "../../constants/actionTypes";
import {
  listCustomersSuccess,
  listCustomersFaild,
  addCustomerSuccess,
  addCustomerFaild,
  editCustomerSuccess,
  editCustomerFaild,
} from "./actions";
import API from "../../services/httpService";

const getCustomersAsync = () => {
  return API.get("/customers");
};
const addCustomerAsync = (customer) => {
  return API.post("/customers", customer);
};
const editCustomerAsync = (customerId, customer) => {
  return API.post(`/customers/update/${customerId}`, customer);
};

/* addCustomer */
function* addNewCustomer({ payload }) {
  try {
    const result = yield call(addCustomerAsync, payload);
    if (result.data.message) throw new Error(result.data.message);
    yield put(addCustomerSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(addCustomerFaild(error.message));
  }
}

/* editCustomer */
function* editCustomer({ payload }) {
  const { customerId, customer } = payload;
  try {
    const result = yield call(editCustomerAsync, customerId, customer);
    if (result.data.message) throw new Error(result.data.message);
    yield put(editCustomerSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(editCustomerFaild(error.message));
  }
}

/* ListCustomers */
function* getCustomers() {
  try {
    const result = yield call(getCustomersAsync, null);
    if (result.data.message) throw new Error(result.data.message);
    yield put(listCustomersSuccess(result.data));
  } catch (error) {
    // catch throw
    yield put(listCustomersFaild(error.message));
  }
}

export function* watchGetCustomers() {
  yield takeEvery(LIST_CUSTOMERS, getCustomers);
}
export function* watchGetAddCustomer() {
  yield takeEvery(ADD_CUSTOMER, addNewCustomer);
}
export function* watchGetEditCustomer() {
  yield takeEvery(EDIT_CUSTOMER, editCustomer);
}

export default function* rootSaga() {
  yield all([fork(watchGetCustomers)]);
  yield all([fork(watchGetAddCustomer)]);
  yield all([fork(watchGetEditCustomer)]);
}
