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

const ConfirmationScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: useWindowDimensions().height * 0.3}]}
        />
        <Text style={styles.title}>Confirm E-mail</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton
          text="Confirm E-mail"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <CustomButton
          text="Resend Code"
          onPress={() => {
            console.log('Code resent successfully');
          }}
          type="SECONDARY"
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

export default ConfirmationScreen;

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
