import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { companiesAPI, fetchCompanies } from "./APIs/companiesAPI";
import { companies, addAllCompanies } from "./Slices/companiesSlice";
import {
  config,
  changeIsLoggedIn,
  changeLogginType,
  changePath,
  changeRendredCompanyId,
  changeRendredPostId,
} from "./Slices/ConfigSlice";
import { posts, replaceAllPosts } from "./Slices/PostsSlice";
import { postsAPI, fetchPosts } from "./APIs/postsAPI";
import { userAPI, postLogin, postAuth } from "./APIs/userAPI";
const store = configureStore({
  reducer: {
    posts: posts.reducer,
    companies: companies.reducer,
    config: config.reducer,
    [companiesAPI.reducerPath]: companiesAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(companiesAPI.middleware)
      .concat(userAPI.middleware)
      .concat(postsAPI.middleware),
  //add api middleware
});
setupListeners(store.dispatch);
export {
  store,
  fetchCompanies,
  addAllCompanies,
  changeIsLoggedIn,
  changeLogginType,
  changePath,
  changeRendredCompanyId,
  fetchPosts,
  replaceAllPosts,
  changeRendredPostId,
  postLogin,
  postAuth,
};
