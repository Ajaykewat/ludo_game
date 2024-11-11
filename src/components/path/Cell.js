import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {Colors} from '../../constant/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {ArrowSpot, SafeSpots, StarSpots} from '../../helpers/PlotData';
import {ArrowRightIcon, StarIcon} from 'react-native-heroicons/outline';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentPositions} from '../../redux/reducers/gameSelectors';
import Pile from '../Pile';
import {handleForwardThunk} from '../../redux/reducers/gameAction';

const Cell = ({color, id}) => {
  const dispatch = useDispatch();

  const plottedPieces = useSelector(selectCurrentPositions);

  const isSafeSpot = useMemo(() => SafeSpots.includes(id), [id]);
  const isStarSpot = useMemo(() => StarSpots.includes(id), [id]);
  const isArrowSpot = useMemo(() => ArrowSpot.includes(id), [id]);

  const piecesAtPosition = useMemo(
    () => plottedPieces.filter(item => item.pos == id),
    [plottedPieces, id],
  );

  const handlePress = useCallback(
    (playerNo, pieceId) => {
      dispatch(handleForwardThunk(playerNo, pieceId, id));
    },
    [dispatch, id],
  );

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isSafeSpot ? color : 'white'},
      ]}>
      {isStarSpot && <StarIcon size={20} color="gray" />}
      {isArrowSpot && (
        <ArrowRightIcon
          size={RFValue(12)}
          color="gray"
          style={{
            transform: [
              {
                rotate:
                  id === 38
                    ? '180deg'
                    : id == 25
                    ? '90deg'
                    : id == 51
                    ? '-90deg'
                    : '0deg',
              },
            ],
          }}
        />
      )}

      {piecesAtPosition?.map((piece, index) => {
        {
          // console.log('piece', piece);
        }
        const playerNo =
          piece.id[0] === 'A'
            ? 1
            : piece.id[0] == 'B'
            ? 2
            : piece.id[0] == 'C'
            ? 3
            : 4;

        const pieceColor =
          playerNo === 1
            ? Colors.red
            : playerNo === 2
            ? Colors.green
            : playerNo === 3
            ? Colors.yellow
            : Colors.blue;

        return (
          <View
            key={piece.id}
            style={[
              styles.pieceContainer,
              {
                transform: [
                  {
                    scale: piecesAtPosition.length === 1 ? 1 : 0.7,
                  },
                  {
                    translateX:
                      piecesAtPosition.length === 1
                        ? 0
                        : index % 2 === 0
                        ? -6
                        : 6,
                  },
                  {
                    translateY:
                      piecesAtPosition.length === 1 ? 0 : index < 2 ? -6 : 6,
                  },
                ],
              },
            ]}>
            <Pile
              cell={true}
              player={playerNo}
              onPress={() => handlePress(playerNo, piece.id)}
              color={pieceColor}
              pieceId={piece.id}
            />
          </View>
        );
      })}
      {/* <Pile
        cell={true}
        color={Colors.green}
        player={2}
        onPress={() => {}}
        pieceId={2}
      /> */}
      {/* <Text>{id}</Text> */}
    </View>
  );
};

export default React.memo(Cell);

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: Colors.borderColor,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieceContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 99,
  },
});
