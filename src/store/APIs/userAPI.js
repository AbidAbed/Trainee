import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), //replace the url with the backend's url (base url)
  endpoints(builder) {
    return {
      postLogin: builder.mutation({
        query: (logInData) => {
          return {
            url: "/login", //replace the path for the resources to meet the one in the backend
            method: "POST",
            body: { email: logInData.email, password: logInData.password },
          };
        },
      }),
      postAuth: builder.mutation({
        query: () => {
          return {
            url: "/auth",
            credentials: "include",
            method: "POST",
          };
        },
      }),
      addUser: builder.mutation({
        query: (signupData) => {
          return {
            url: "/signup",
            method: "POST",
            body: {
              //add body for signup
            },
          };
        },
      }),
    };
  },
});
export { userAPI };
export const { postLogin, postAuth } = userAPI;
