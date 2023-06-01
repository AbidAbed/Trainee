import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    isLoggedIn: false,
    logginType: null,
    path: "/home",
    rendredCompanyId: null,
    rendredPostId: null,
  },
  reducers: {
    changeIsLoggedIn(state, action) {
      return { ...state, isLoggedIn: action.payload };
    },
    changeLogginType(state, action) {
      return { ...state, logginType: action.payload };
    },
    changePath(state, action) {
      return { ...state, path: action.payload };
    },
    changeRendredCompanyId(state, action) {
      return { ...state, rendredCompanyId: action.payload };
    },
    changeRendredPostId(state, action) {
      return { ...state, rendredPostId: action.payload };
    },
  },
});
export { config };
export const {
  changeIsLoggedIn,
  changeLogginType,
  changePath,
  changeRendredCompanyId,
  changeRendredPostId
} = config.actions;
