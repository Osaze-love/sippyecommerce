import {
  ThunkAction,
  Action,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "@/lib/store";

type Product = {
  item: object;
  category: object[];
};

const initialState: Product = {
  item: {},
  category: [],
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<object>) => {
      state.item = action.payload;
      console.log(state.item);
    },
    addCategory: (state, action: PayloadAction<object[]>) => {
      state.category = action.payload;
      console.log(state.category);
    },
  },
});

export const { addProduct, addCategory } = product.actions;
export default product.reducer;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const fetchProductCategory =
  (category: string): AppThunk =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}?limit=5`
      );
      const data = await res.json();
      dispatch(addCategory(data.products));
    } catch (error) {
      console.error("Error fetching category:", error);
    }
  };
