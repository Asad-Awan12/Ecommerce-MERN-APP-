import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
})
})

export const { useRegisterUserMutation,useLoginUserMutation ,useGetUsersQuery } = authApi










