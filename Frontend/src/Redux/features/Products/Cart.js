import { createSlice, current } from "@reduxjs/toolkit";

// export const initialState = {
//   products: [],
//   // count:0,
//   // quantity:"1"
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, actions) => {
      const product = state?.find(
        (product) => product._id === actions.payload._id
      );
      if (product) {
        return state.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
      return [...(state || []), { ...actions.payload, quantity: 1 }];
    },
    removeCart: (state, actions) => {
      state.splice(actions.payload, 1);
    },
    increment: (state, actions) => {
      return state.map((items) => {
        if (items._id === actions.payload) {
          return { ...items, quantity: items.quantity + 1 };
        }
        return items;
      });
    },
    decrement: (state, actions) => {
      return state
        .map((items) => {
          if (items._id === actions.payload) {
            return { ...items, quantity: items.quantity - 1 };
          }
          return items;
        })
        .filter((items) => items.quantity > 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
