import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    productAdded: (cart, action) => {
      const indexInCart = cart.findIndex(
        cartItem => cartItem._id === action.payload._id
      );

      if (indexInCart > -1) {
        cart.splice(indexInCart, 1);
      } else {
        cart.push({ ...action.payload, count: 1 });
      }
    },

    itemCountIncremented: (cart, action) => {
      const index = cart.findIndex(cartItem => cartItem._id === action.payload);
      let item = cart[index];
      item.count++;
    },

    itemCountDecremented: (cart, action) => {
      const index = cart.findIndex(cartItem => cartItem._id === action.payload);
      let item = cart[index];
      if (item.count > 0) item.count--;
    },
  },
});

export const {
  productAdded,
  itemCountIncremented,
  itemCountDecremented,
} = slice.actions;

export default slice.reducer;

export const addToCart = id => (dispatch, getState) => {
  const products = getState().entities.products.list;
  const index = products.findIndex(product => product._id === id);

  dispatch({ type: productAdded.type, payload: products[index] });
};
