import categoriesApi from "./services/categoriesApi";

const categoryActionCreators = {
  addNew(categoryName) {
    return function (dispatch) {
      const newCategoryData = { id: 0, name: categoryName };

      categoriesApi.save(newCategoryData).then((newCategory) => {
        const action = { type: "ADD_CATEGORY", payload: newCategory };
        dispatch(action);
      });
    };
  },
  setSelected(category) {
    const action = { type: "SET_SELECTED_CATEGORY", payload: category };
    return action;
  },
};

export default categoryActionCreators;
