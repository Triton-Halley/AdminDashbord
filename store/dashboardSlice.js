import { createSlice } from "@reduxjs/toolkit";

const dashboardPageSlice = createSlice({
  name: "dashboard",
  initialState: { currentPage: "overview" },
  reducers: {
    updateView(state, action) {
      const { payload } = action;
      state.currentPage = payload;
      console.log(state.currentPage);
    },
  },
});

export const dashboardPageAction = dashboardPageSlice.actions;

export default dashboardPageSlice;
