import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BG from '../assets/images/bg.jpg';
import {deviceHeight, deviceWidth} from '../constant/Scaling';

const Wrapper = ({children, style}) => {
  return (
    <ImageBackground source={BG} resizeMode="cover" style={styles.container}>
      <SafeAreaView style={[styles.SafeAreaView, {...style}]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SafeAreaView: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
