import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:3000/api/users/',
     credentials:'include' 
    }),
  endpoints: (builder) => ({
    registerUser:builder.mutation({
          query:(newUser)=>({
            url:'register',
            method:'POST',
            body:newUser
          }),
  }),
  loginUser:builder.mutation({
        query:(credentials)=>({
          url:'/login',
          method:'POST',
          body:credentials
        })
      }),
      getUsers:builder.query({
        query:()=>({
          url:'/',
          method:'GET',
        }),
        refetchOnMount : true,
        invalidatesTags:['User']

      }),
      // deleteUser:builder.mutation({
      //   query:()=>({
      //     url:'/',
      //     method:'GET',
      //   }),
      // }),
})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation,useLoginUserMutation ,useGetUsersQuery } = authApi
// export default authApi








// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // Define a service using a base URL and expected endpoints
// export const userAuth = createApi({
//   reducerPath: 'userAuth',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/users',credentials:'include' }),
//   tagTypes: ["users"],
//  endpoints:(builder)=>({
//   registerUser:builder.mutation({
//     query:(newUser)=>({
//       url:'/register',
//       method:'POST',
//       body:newUser
//     }),
//     refetchOnMount:true,
//     invalidatesTags: ["User"],
//   }),
//   loginUser:builder.mutation({
//     query:(credentials)=>({
//       url:'/login',
//       method:'POST',
//       body:credentials
//     })
//   })
//  })
// })

// export const {useRegisterUserMutation, useLoginUserMutation } = userAuth
// // export default userAuth;


