import { configureStore } from "@reduxjs/toolkit";

import dashboardPageSlice from "./dashboardSlice";
const store = configureStore({
  reducer: { dashboard: dashboardPageSlice.reducer },
});

export default store;
