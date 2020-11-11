import C from '../constant';

export const setProductsList = (data) => ({
  type: C.SET_PRODUCTS_LIST,
  payload: data
});

// Without : return(dispatch)
// Error : Actions must be plain objects. Use custom middleware for async actions.
// Sol : https://stackoverflow.com/questions/50059724/how-do-i-resolve-actions-must-be-plain-objects-use-custom-middleware-for-async
export function fetchProducts() {
  return (dispatch) => {
    fetch(" http://localhost:3006/productList")
      .then(res => res.json())
      .then(result => {
          dispatch(setProductsList(result));
      }
      )
      .catch((err) => {
        console.log(err);
      });
  }
}
