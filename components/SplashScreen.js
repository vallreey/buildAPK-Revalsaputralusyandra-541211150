import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet,ImageBackground } from 'react-native';

export default function SplashScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
      navigation.navigate('Login');
    }, 2000); 
  }, );

  return (
    <View style={styles.container}>
      <ImageBackground 
  source={require('../assets/noa.jpg')} 
  style={{ borderRadius: 150,
    width: 180,
    height: 180,
    alignItems: 'center', }}>
</ImageBackground>
    <Text style= {{fontSize: 20, fontWeight: 'bold'}}>Loading Gan</Text>
      {isLoading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});