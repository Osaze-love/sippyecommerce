import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Item {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Item>) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.items.push(action.payload);
      state.items.reverse();
    },
    deleteCartItem: (state, action: PayloadAction<Item>) => {
      const idToDelete = action.payload.id;
      state.items = state.items.filter((item) => item.id !== idToDelete);
    },
  },
});

export const selectSubtotal = createSelector(
  (state: RootState) => state.cartSlice.items,
  (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)
);

console.log(selectSubtotal);

export const { addCartItem, deleteCartItem } = cart.actions;

export default cart.reducer;
