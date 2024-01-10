import { View, TextInput, Text, StyleSheet, Image } from 'react-native';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import CustomImage from './CustomImage';
import React, { useState } from 'react';

export default function RegisterScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const PopUpRegister = () => {
    navigation.navigate('Home');
    alert(`Halo, ${nama}`);
  };
  const LoginCuy = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', top: 175 }}>
      <CustomImage
        imagestyle={styles.tinyLogo}
        imagenya={require('../assets/headerhijau.png')}
      />
      <CustomImage imagestyle={styles.Logo} imagenya={require('../assets/CalDiFit2.png')} />
      <View style={styles.rectangle}></View>
      <Text style={styles.title}>Register </Text>
      <CustomTextInput
        placeholder="Nama"
        textinputstyle={styles.namacuy}
        id={nama}
        onChangeText={(text) => setNama(text)}
      />
      <CustomTextInput placeholder="Email" textinputstyle={styles.email} />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        textinputstyle={styles.password}
      />
      <CustomButton
        onPress={() => {
          if (!nama) {
            alert('Masukkan nama dulu cuy');
          } else {
            PopUpRegister();
          }
        }}
        title="Register"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <Text style={{ color: 'white', textAlign: 'center' }}>Daftar</Text>
      <Text style={{ top: -790, marginTop: 20 }}>
        Sudah punya akun?{' '}
        <Text style={{ color: 'blue' }} onPress={LoginCuy}>
          Login disini
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 450,
    height: 390,
    top: -180,
  },
  button: {
    top: -785,
    width: 240,
    backgroundColor: '#00BB9D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  password: {
    borderRadius: 10,
    top: -795,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 240,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  namacuy: {
    borderRadius: 10,
    top: -795,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 240,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  email: {
    borderRadius: 10,
    top: -795,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 240,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  Logo: {
    top: -360,
    width: 240,
    height: 240,
  },
  title: {
    top: -810,
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rectangle: {
    top: -455,
    left: -1,
    width: 280,
    height: 390,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
