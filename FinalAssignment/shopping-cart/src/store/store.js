import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const consoleMessages = store => next => (action) => {
  let result;

  console.info(`dispatching action => ${action ? action.type : 'No action'}`);
  result = next(action);
  const { accounts, errors } = store.getState();
  console.info('=======');
  try {
    console.log(store.getState());
  } catch (err) {
    console.log('>>No data<<');
  }
  console.info('=======');

  return result;
};

const enhancer = composeEnhancer(applyMiddleware(thunk, consoleMessages));

const store = createStore(allReducers, enhancer);

export default store;
