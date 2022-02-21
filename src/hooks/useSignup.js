import React, { useState } from 'react';
import { projectAuth } from '../firebase/config';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //sign up user
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error('Could not complete signup');

      }

      //add display name to user 
      await response.user.updateProfile({displayName});
      setIsPending(false);
      setError(null);

    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };
  return { error, isPending, signup };
};

export default useSignup;
