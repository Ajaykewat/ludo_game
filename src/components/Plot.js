import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constant/colors';
import Pile from './Pile';

const Plot = ({pieceNo, player, color, data, onPress}) => {
  return (
    <View style={[styles.plot, {backgroundColor: color}]}>
      {data && data[pieceNo]?.pos === 0 && (
        <Pile
          pieceNo={pieceNo}
          player={player}
          color={color}
          onPress={() => onPress(data[pieceNo])}
        />
      )}
    </View>
  );
};

export default Plot;

const styles = StyleSheet.create({
  plot: {
    height: '80%',
    width: '36%',
    borderRadius: 120,
  },
});
