import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
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
import SocialSignInButtons from '../../Components/SocialSignInButtons';
const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: useWindowDimensions().height * 0.3}]}
        />
        <Text style={styles.title}>Create an account</Text>
        <CustomInput placeholder="Full Name" value={name} setValue={setName} />
        <CustomInput
          placeholder="E-mail Id"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Enter your password again"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
        <CustomButton
          text="Sign Up"
          onPress={() => {
            navigation.navigate('ConfirmEmail');
          }}
        />
        <Text style={styles.text}>
          On signup, you agree to our
          <Text style={styles.link}>Terms of Use</Text> and
          <Text style={styles.link}> Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Already have an account ? Sign in"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },
});
