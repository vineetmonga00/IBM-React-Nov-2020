function addNew(name, description, price){
  const newProduct = {
    id: ++newProductId,
    name: name,
    description: description,
    price: price,
    isOutOfStock: false
  };
  const action = { type: 'ADD_PRODUCT', payload: newProduct };
  return action;
}

export default addNew;
