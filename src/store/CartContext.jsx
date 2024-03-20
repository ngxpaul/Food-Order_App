import { Children, createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //update the state to add a meal item
    // state.items.push(action.item);
    //push will edit existing items in array which is stored in memory
    // => change the state value before cartReducer is done executing
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    //copy the existing items in the cart
    if (existingCartItemIndex > -1) {
      //if the item already exists in the cart
      const updatedItem = {
        ...state.items[existingCartItemIndex],
        quantity: state.items[existingCartItemIndex].quantity + 1,
      };
    } else {
      //create new object => spread all meal item to this object
      updatedItems.push({...action.item, quantity: 1});
      //if the item is not in the cart
    }
  }
  if (action.type === "ADD_ITEM") {
    //reove the state to add a meal item
  }
  return state;
}
export function CartContextProvider(children) {
  //reducer function at first parameter and then the initial state
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
  //Provoder property wrap any component that needs access to the context
}
export default CartContext;
