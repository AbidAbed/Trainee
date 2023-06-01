import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const postsAPI = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), //replace the url with the backend's url (base url)
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        query: (id) => {
          return {
            url: "/posts", //replace the path for the resources to meet the one in the backend
            method: "GET",
            params: { id: id },
          };
        },
      }),
    };
  },
});
export { postsAPI };
export const { fetchPosts } = postsAPI;
