import C from '../constant';

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case C.SET_PRODUCTS_LIST:
      return {
        ...state,
        products: payload,
      }
    default:
      return state;
  }
};

