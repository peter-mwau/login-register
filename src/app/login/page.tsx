"use state"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { auth } from '../../../firebase/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setSuccess("Login successful");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const toggle = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  };

  return (
    <div className="bg-gray-50 text-black h-[100vh] w-full relative">
      {/* Rest of the code */}
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-gray-50 text-black h-[100vh] w-full relative">
      {/* Rest of the code */}
    </div>
  );
}
