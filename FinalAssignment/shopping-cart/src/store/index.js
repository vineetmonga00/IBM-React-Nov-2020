import { combineReducers } from 'redux';
import productList from './reducers/productList'
const allReducer = combineReducers({
  productList,
});
export default allReducer;
