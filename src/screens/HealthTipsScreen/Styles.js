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
  healthCard: {
    elevation: 5,
    backgroundColor: 'white',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    flex: 1,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 3,
    elevation: 5,
    padding: 10,
    width: '100%',
    alignSelf: 'flex-end',
  },
});
