import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Plot from './Plot';
import {useDispatch} from 'react-redux';
import {
  unfreezeDice,
  updatePlayerPieceValue,
} from '../redux/reducers/gameSlice';
import {startingPoints} from '../helpers/PlotData';

const Pocket = React.memo(({color, player, data}) => {
  const dispatch = useDispatch();

  console.log('player ///', player);

  const handlePress = async value => {
    let playerNo = value?.id.split('')[0];

    switch (playerNo) {
      case 'A':
        playerNo = 'player1';
        break;
      case 'B':
        playerNo = 'player2';
        break;
      case 'C':
        playerNo = 'player3';
        break;
      case 'D':
        playerNo = 'player4';
        break;
    }
    dispatch(
      updatePlayerPieceValue({
        playerNo: playerNo,
        pieceId: value.id,
        pos: startingPoints[parseInt(playerNo.match(/\d+/)[0], 10) - 1],
        travelCount: 1,
      }),
    );

    dispatch(unfreezeDice());
  };
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.childFrame}>
        <View style={styles.flexRow}>
          <Plot
            pieceNo={0}
            player={player}
            data={data}
            onPress={handlePress}
            color={color}
          />
          <Plot
            pieceNo={1}
            player={player}
            data={data}
            onPress={handlePress}
            color={color}
          />
        </View>
        <View style={[styles.flexRow, {marginTop: 20}]}>
          <Plot
            pieceNo={2}
            player={player}
            data={data}
            onPress={handlePress}
            color={color}
          />
          <Plot
            pieceNo={3}
            player={player}
            data={data}
            onPress={handlePress}
            color={color}
          />
        </View>
      </View>
    </View>
  );
});

export default Pocket;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '100%',
  },
  childFrame: {
    backgroundColor: 'white',
    width: '70%',
    height: '70%',
    borderColor: Colors.borderColor,
    padding: 15,
    borderWidth: 0.4,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '40%',
  },
});
