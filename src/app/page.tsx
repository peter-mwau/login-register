"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../../firebase/firebase'
import { createUserWithEmailAndPassowrd } from 'firebase/auth'

export default function Home() {
  const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    
    const register = (e) => {
      e.preventDefault()
      if (password !== confirmpassword) {
        return setError("Passwords do not match")
      }
      auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        setSuccess("Account created successfully")
        // ...
      })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          setError(errorMessage)
          // ..
        });
    }
  }


  const toggle = () => {
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword')
    if (password.getAttribute('type') === 'password' || confirmpassword?.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
      confirmpassword?.setAttribute('type', 'text');

    } else {
      password.setAttribute('type', 'password');
      confirmpassword?.setAttribute('type', 'password');

    }
  }
  return (
    <div className="bg-gray-50 text-black h-[100vh] w-full relative">
      <div className="absolute inset-0 bg-gradient-to-br">
        <Image
          src="/background2.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <nav>
        <div className="flex justify-between items-center p-4 shadow-sm absolute w-full">
          <div className="flex items-center space-x-4">
            <Image src="/logo_mine.png" width={40} height={40} />
            <h1 className="text-2xl font-bold">Login-Register</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="text-lg font-semibold hover:text-white hover:underline-offset-1">
              Home
            </a>
            <a href="/register" className="text-lg font-semibold hover:text-white hover:underline-offset-1">
              About
            </a>
            <a href="/contact" className="text-lg font-semibold hover:text-white hover:underline-offset-1">
              Contact
            </a>
            <a href="/login" className="text-lg font-semibold p-2 rounded-lg hover:bg-white hover:text-black hover:shadow-md hover:transition-shadow hover:cursor-pointer outline-none">
              Login
            </a>
            <a href="/register" className="text-lg font-semibold">
              Register
            </a>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center h-full relative">
        <div className="bg-black bg-opacity-60 h-[400px auto] w-[500px] p-8 rounded-lg shadow-lg">
          {/* Add your login form components here */}
          <h2 className="text-2xl font-bold mb-4 flex mx-auto items-center justify-center uppercase font-serif text-white">Register</h2>
          <form>
            <div>
            <label htmlFor="names" className="block text-sm font-medium text-white">
                Names
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
              </div>
              <div className="mt-1 relative">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Password
              </label>
                <div className='flex items-center'>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
                {/* <svg></svg> */}
                <Image
                  src="/eye-off.svg"
                  alt="Background Image"
                  width={20}
                  height={20}
                  className='absolute right-2 bottom-2 hover:cursor-pointer'
                  onClick={toggle}
                 
                />
                </div>
              </div>
              <div className="mt-1 relative">
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
                <div className='flex items-center'>
                <input
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
                {/* <svg></svg> */}
                <Image
                  src="/eye-off.svg"
                  alt="Background Image"
                  width={20}
                  height={20}
                  className='absolute right-2 bottom-2 hover:cursor-pointer'
                  onClick={toggle}
                 
                />
                </div>
              </div>
              <div className='mt-2'>
                <input type='checkbox' className=''/>
                <span className='m-2 p-2 text-lg space-x-2 text-white'>Remember Me</span>
              </div>
            </div>
            <div className='m-2 p-3 mx-auto items-center justify-center shadow-xlg flex'>
              <button type='submit' className='bg-gray-50 text-xl p-1 rounded-sm font-serif font-extrabold hover:bg-gray-400 hover:delay-75 hover:shadow-lg'>Register</button>
              {/* <a href='login' className='text-white text-md hover:underline m-2 '>Sign In</a> */}
              <Link href={'/login'} className='text-white text-md hover:underline m-2 '>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

