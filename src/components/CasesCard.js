import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants/Theme';

const CasesCard = props => {
  const {first, second, third, fourth} = props;
  return (
    <View style={styles.casesCard}>
      <Text style={styles.casesCardTextBlack}>{first ? first : '-'}</Text>
      <Text style={styles.casesCardTextBlue}>{second ? second : '-'}</Text>
      <Text style={styles.casesCardTextGreen}>{third ? third : '-'}</Text>
      <Text style={styles.casesCardTextRed}>{fourth ? fourth : '-'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  casesCard: {
    elevation: 1,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
    margin: 2,
    borderRadius: 2,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  casesCardTextBlack: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.black,
    ...FONTS.body4,
  },
  casesCardTextBlue: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.primary,
    ...FONTS.body4,
  },
  casesCardTextRed: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.red,
    ...FONTS.body4,
  },
  casesCardTextGreen: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: COLORS.green,
    ...FONTS.body4,
  },
});

export default CasesCard;
