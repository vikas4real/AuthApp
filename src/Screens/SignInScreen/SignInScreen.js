import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/xparticle-logo.png';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import SocialSignInButtons from '../../Components/SocialSignInButtons';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: useWindowDimensions().height * 0.3}]}
        />
        <CustomInput
          placeholder="E-mail Id"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Sign In"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <CustomButton
          text="Forgot Password ?"
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account ? Create One"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    resizeMode: 'contain',
  },
});
