import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from './CustomButton';
const SocialSignInButtons = () => {
  return (
    <>
      <CustomButton
        text="Sign in with Google"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
      />
      <CustomButton
        text="Sign in with Facebook"
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
      <CustomButton
        text="Sign in with Apple"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;
