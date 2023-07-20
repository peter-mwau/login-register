"use client"

import Image from 'next/image';
import Link from 'next/link';
import firebase from '../../firebase/firebase';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useRouter } from 'next/router';



export default function Login() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  // const router = typeof window !== 'undefined' ? useRouter() : null;

  const handleEmailSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User signed in successfully');
      setSuccess('User signed in successfully')
      // setTimeout(() => {
      //   setSuccess('');
      //   router.push('/homepage'); // Redirect to /homepage after successful login
      // }, 3000);
    } catch (error) {
      setError(error.message);
      console.error('Error signing in with email and password:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      // You can access the user information from the result object
      console.log(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };


  const toggle = () => {
    const password = document.getElementById('password');
    if (password.getAttribute('type') === 'password') {
      password.setAttribute('type', 'text');
     

    } else {
      password.setAttribute('type', 'password');
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
            <a href="/services" className="text-lg font-semibold p-2 rounded-lg hover:bg-white hover:text-black hover:shadow-md hover:transition-shadow hover:cursor-pointer outline-none">
              Services
            </a>
            <a href="/contact" className="text-lg font-semibold hover:text-white hover:underline-offset-1">
              Contact
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
          <h2 className="text-2xl font-bold mb-4 flex mx-auto items-center justify-center uppercase font-serif text-white">Login</h2>
          {/* error/success */}
        {error && (
          <div className=" text-red-400 font-serif font-semibold p-2">
            {error}
          </div>
        )}
        {success && (
          <div className= "text-green-500 font-serif font-semibold p-2">
            {success}
          </div>
        )}
          <form onSubmit={handleEmailSignIn}>
            <div className="space-y-4">
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
                  // required
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
                  // required
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
              <button type='submit' className='bg-gray-50 text-xl p-1 rounded-sm font-serif font-extrabold hover:bg-gray-400 hover:delay-75 hover:shadow-lg'>Login</button>
              {/* <a href='login' className='text-white text-md hover:underline m-2 '>Sign In</a> */}
              <Link href={'/register'} className='text-white text-md hover:underline m-2 '>Sign Up</Link>
            </div>
            <div className='flex flex-row mx-auto items-center justify-center'>
              <div className='items-start m-1 p-2'>
                <button type='submit' onClick={handleGoogleSignIn} className='bg-gray-300 p-2 rounded-md hover:bg-gray-50 flex justify-between'>
                <Image
                  src="/google.png"
                  alt="Background Image"
                  width={20}
                  height={20}
                  className='hover:cursor-pointer mr-1'
                />
                  Sign In With Google</button>
              </div>
              <div className='items-end m-1 p-2'>
                <button className='bg-gray-300 p-2 rounded-md hover:bg-gray-50 flex space-x-2'>
                <Image
                  src="/github.png"
                  alt="Background Image"
                  width={20}
                  height={20}
                  className='hover:cursor-pointer mr-1'
                />
                  Sign In With Github</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

