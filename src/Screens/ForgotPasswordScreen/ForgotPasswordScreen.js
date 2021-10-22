import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  Image,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/xparticle-logo.png';
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: useWindowDimensions().height * 0.3}]}
        />
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Enter your e-mail id"
          value={email}
          setValue={setEmail}
        />
        <CustomButton
          text="Send Reset Link"
          onPress={() => {
            console.log('Password reset link sent to your e-mail ');
          }}
        />
        <CustomButton
          text="Go back to Sign In"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
});
