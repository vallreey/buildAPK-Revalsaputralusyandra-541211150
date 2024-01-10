import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import CustomImage from './CustomImage';

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function HomeScreen() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const openURL = () => {
    const url = 'https://bit.ly/Porto1cuy';
    Linking.openURL(url);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomImage
          imagestyle={styles.tinyLogo}
          imagenya={require('../assets/noa.jpg')}
        />
        <Text style={styles.title}>Revalsa Putra Lusyandra </Text>
        <Text style={styles.subtitle}>
          Halo, Saya Revalsa Putra Lusyandra, Saya Lahir Di Banjarnegara 4 Mei
          2006, Saat Ini Saya Masih Menjadi Seorang Pelajar Di SMK Telkom
          Purwokerto.{' '}
        </Text>
        <Button
          onPress={() => alert('Thank You')}
          title="Contact Me"
          color="#5272F2"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text style={styles.recentproject}>My Recent Project </Text>
        <CustomImage
          imagestyle={styles.proyek}
          resizeMode="contain"
          imagenya={require('../assets/Porto1.png')}
        />
        <TouchableOpacity onPress={openURL}>
          <CustomImage
            imagestyle={styles.buttonporto1}
            imagenya={require('../assets/ButtonArrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.projecttitle1}>CalDiFit</Text>
        <Text style={styles.projecttype1}>Mobile Design</Text>
        <View style={styles.likeButtons}>
          <TouchableOpacity onPress={handleLike}>
            <MaterialCommunityIcons
              style={{ left: -142, top: -28 }}
              name="heart"
              size={25}
              color="red"
            />
          </TouchableOpacity>
          <Text style={{ left: -135, top: -25 }}>{likes}</Text>
        </View>
        <View style={styles.likeButtons}>
          <TouchableOpacity onPress={handleDislike}>
            <MaterialCommunityIcons
              style={{ left: -90, top: -63 }}
              name="heart-broken"
              size={25}
              color="purple"
            />
          </TouchableOpacity>
          <Text style={{ left: -86, top: -60 }}>{dislikes}</Text>
        </View>
        <Image
          style={styles.proyek}
          resizeMode="contain"
          source={require('../assets/Porto1.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#B6FFFA',
    alignItems: 'center',
  },
  likeButtons: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  recentproject: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  proyek: {
    height: 200,
    width: 320,
    borderRadius: 10,
  },

  buttonporto1: {
    left: 136,
    top: 7,
    width: 50,
    height: 40,
    borderRadius: 15,
  },

  projecttitle1: {
    fontWeight: 'bold',
    fontSize: 23,
    top: -38,
    left: -117,
  },

  projecttype1: {
    left: -118,
    top: -38,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray',
  },

  subtitle: {
    color: '#072541',
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 5,
    marginBottom: 13,
  },
  tinyLogo: {
    borderRadius: 150,
    width: 180,
    height: 180,
    alignItems: 'center',
  },
});
