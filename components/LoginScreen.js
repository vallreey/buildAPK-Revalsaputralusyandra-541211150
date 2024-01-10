import { Text, StyleSheet, View, Image, TextInput } from 'react-native';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import CustomImage from './CustomImage';

export default function LoginScreen({ navigation }) {
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  const goToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', top: 175 }}>
      <CustomImage
        imagestyle={styles.tinyLogo}
        imagenya={require('../assets/headerhijau.png')}
      />
      <CustomImage imagestyle={styles.Logo} imagenya={require('../assets/CalDiFit2.png')} />
      <View style={styles.rectangle}></View>
      <Text style={styles.title}>Sign In </Text>
      <CustomTextInput
        placeholder="Email"
        textinputstyle={styles.textinputstyle}
      />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry={true}
        textinputstyle={styles.password}
      />
      <Text
        style={{
          color: '#00BB9D',
          top: -820,
          marginTop: 20,
          fontSize: 13,
          left: 70,
        }}
        onPress={goToRegister}>
        Lupa Password?
      </Text>

      <CustomButton
        onPress={goToHome}
        title="Login"
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
      <Text style={{ top: -800, marginTop: 20 }}>
        Belum punya akun?{' '}
        <Text style={{ color: 'blue' }} onPress={goToRegister}>
          Daftar disini
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

  textinputstyle: {
    borderRadius: 10,
    top: -795,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 240,
    marginBottom: 10,
    paddingHorizontal: 10,
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

  button: {
    top: -805,
    width: 240,
    backgroundColor: '#00BB9D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
