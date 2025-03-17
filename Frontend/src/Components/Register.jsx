import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/features/Users/authSlice'
import axios from 'axios'
export const Register = () => {
	const [username,setuserName] = useState("")
	const [email,setemail] = useState("")
	const [password,setpassword] = useState("")
	const [getUser,setgetUser] = useState()
	// const [register,setregister] = useState({
	// 	username:username,
	// 	email:email,
	// 	password:password
	// })
	const dispatch = useDispatch()	
	const navigate = useNavigate()
	
	// Register Form
	const register = {
		username:username,
		email:email,
		password:password
	}
	const handleRegister = async()=>{
		try {
			await axios({
				method: 'POST',
				url: 'http://localhost:3000/api/users/register',
				data: register, 
				headers: {
					// 'Authorization': `bearer ${token}`,
					'Content-Type': 'application/json'
				  }
		
			}).then(function(response) {
				// dispatch(addUser(response?.data?.user))
				console.log('response ',response);
			})
			
     return	navigate('/login')
		} catch (error) {
			console.log(error);
			
		}
	// useEffect(()=>{
	// 	axios({
	// 		method:'GET',
	// 		url:'http://localhost:3000/api/users',
	// 		headers: {
	// 			// 'Authorization': `bearer ${token}`,
	// 			'Content-Type': 'application/json'
	// 		  }
	// 	}).then((res)=>{
	// 		return res.json()
	// 	})
	// 	.then((data)=>{
	// 		dispatch(addUser(data))
	// 	})
	// },[])

		// axios(`http://localhost:3000/api/users/register`,{
		// 	method: 'POST',
		// 	data: data,
		// 	headers: {
		// 	 'Content-Type': 'application/json'
		//    }
		//   })
		// 	.then(((response)=> response.json()))
		// 	.then((data)=>console.log('data ',data)
		// 	)
		
		setuserName('')
		setemail('')
		setpassword("")
		// setregister([...register,{
		// 	username:username,
		// 	email:email,
		// 	password:password
		// }])
	}
	// useEffect(()=>{
	// 	dispatch(addUser(getUser));

	// },[getUser])
	// console.log('register ',getUser);/
	
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold" style={{fontFamily:'auto'}}>Register Here</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
					<div class="relative">
							<input autocomplete="on" id="username" name="username" value={username} onChange={(e)=>setuserName(e.target.value)} type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter Username" />
							<label for="Username" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
						</div>
						<div class="relative">
							<input autocomplete="on" id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div class="relative">
							<input autocomplete="on" id="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1" style={{width:'-webkit-fill-available'}} onClick={handleRegister}>Submit</button>
						</div>
					</div>
				</div>
				<p style={{fontFamily:'auto'}}>If you are already signup then <span onClick={()=>navigate('/login')} style={{fontFamily:'-moz-initial',color:'red',cursor:'pointer'}}>Login</span></p>
			</div>
		</div>
	</div>
</div>
  )
}
