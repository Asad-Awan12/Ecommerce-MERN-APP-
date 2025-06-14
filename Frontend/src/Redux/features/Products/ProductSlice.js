

















// Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// export const productApi = createApi({
//   reducerPath: "productApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/products" }),
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => ({
//         url: "/",
//         method: "GET",
//       }),
//       refetchOnMount: true,
//       invalidatesTags: ["Product"],
//     }),
//   }),
// });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const { useGetProductsQuery } = productApi;
