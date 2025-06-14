import React, { useEffect, useState } from 'react'
import { useLoginUserMutation } from '../Redux/features/Users/usersAuth'
import { useDispatch, useSelector } from 'react-redux'
import { loginUsers } from '../Redux/features/Users/authSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {
	const [email,setemail] = useState('')
	const [password,setpassword] = useState('')
	const [message,setmessage] = useState('')
	// const [users,setUsers]  = useState()
	const [loginUser] = useLoginUserMutation()
	// console.log(loginUser);
	const user = useSelector((state)=>state.user)
	// console.log("user ",user);
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	
	const data = {
		email,
		password
	}
	const handleSubmit =async(e)=>{
		e.preventDefault()
	
		
		try {
		await axios({
				method: 'POST',
				url: 'http://localhost:3000/api/users/login',
				data, 
		
			}).then(function(response) {
				console.log(response);
			}).catch(function (error){
				console.log(error);});
				navigate('/')
			
			
			// const response = await loginUser(data).unwrap();
			// console.log(response);
			// const {user} = response;
			// dispatch(loginUsers(user))
			// navigate('/')
			
		} catch (error) {
			console.log("Failed To Login");
			setmessage('Failed To Login')	
		}
	}

  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login Here</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" required id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} type="text"  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="off" required id="password" value={password} onChange={(e)=>setpassword(e.target.value)} name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div className='relative'>
							{
								message && <p className='text-red-500'>{message}</p>
							}
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1" style={{width:'-webkit-fill-available'}} onClick={handleSubmit}>Submit</button>
						</div>
					</div>
				</div>
				<p style={{fontFamily:'auto'}}>If you are not register user then <span onClick={()=>navigate('/signup')} style={{fontFamily:'-moz-initial',color:'red',cursor:'pointer'}}>Signup</span></p>

			</div>
		</div>
	</div>
</div>
  )
}
