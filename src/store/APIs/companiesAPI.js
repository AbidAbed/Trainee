import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const companiesAPI = createApi({
  reducerPath: "companiesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }), //replace the url with the backend's url (base url)
  endpoints(builder) {
    return {
      fetchCompanies: builder.query({
        query: () => {
          return {
            url: "/companies", //replace the path for the resources to meet the one in the backend
            method: "GET",
          };
        },
      }),
    };
  },
});
export { companiesAPI };
export const { fetchCompanies } = companiesAPI;
