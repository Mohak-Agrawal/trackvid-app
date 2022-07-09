import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  healthImage: {
    width: '100%',
    height: 230,
    alignSelf: 'center',
    borderRadius: 5,
  },
  healthTipsCard: {
    elevation: 5,
    backgroundColor: COLORS.white,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    flexDirection: 'column',
    paddingVertical: 15,
    paddingHorizontal: 10,
    width: '95%',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  healthTipstitle: {
    color: COLORS.primary,
    ...FONTS.h4,
    marginBottom: 10,
  },
});
