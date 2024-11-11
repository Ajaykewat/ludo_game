import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  PlayPauseIcon,
  PlayCircleIcon,
  ComputerDesktopIcon,
  UserIcon,
  HomeIcon,
} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';
import {RFValue} from 'react-native-responsive-fontsize';
import {playSound} from '../helpers/SoundUtility';

const iconSize = RFValue(20);

const GradientButton = ({title, onPress, iconColor = '#d5be3e'}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          playSound('ui');
          onPress();
        }}
        style={styles.btnContainer}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.button}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          {title == 'RESUME' ? (
            <PlayPauseIcon size={iconSize} color={iconColor} />
          ) : title == 'NEW GAME' ? (
            <PlayCircleIcon size={iconSize} color={iconColor} />
          ) : title == 'VS CPU' ? (
            <ComputerDesktopIcon size={iconSize} color={iconColor} />
          ) : title == 'HOME' ? (
            <HomeIcon size={iconSize} color={iconColor} />
          ) : (
            <UserIcon size={iconSize} color={iconColor} />
          )}
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    borderWidth: 2,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    shadowColor: '#b5be3e',
    shadowOpacity: 0.5,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 10,
    borderColor: '#d5be3e',
    width: 240,
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue(16),
    width: '70%',
    textAlign: 'center',
    fontFamily: 'Philosopher-Bold',
  },
});
