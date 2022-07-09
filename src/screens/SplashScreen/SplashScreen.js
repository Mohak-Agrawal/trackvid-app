import {View, Text, Image, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';
import AppStack from '../../routes/AppStack';

const SplashScreen = () => {
  const [timeOut, setTimeOut] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimeOut(true);
    }, 1500);
  }, []);

  return !timeOut ? (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Image
        source={require('../../assets/Splash_Icon.png')}
        resizeMode="cover"
        style={{height: 500, width: 500}}
      />
    </View>
  ) : (
    <AppStack />
  );
};

export default SplashScreen;
