import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {PM_CARE_LINK} from '../../constants/Strings';
import styles from './Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS, FONTS, SIZES} from '../../constants/Theme';

const CAROUSEL_ONE = [
  require('../../assets/images/blue_2.png'),
  require('../../assets/images/blue_1.png'),
  require('../../assets/images/blue_3.png'),
  require('../../assets/images/blue_4.png'),
];

const CAROUSEL_TWO = [
  require('../../assets/images/beready.jpg'),
  require('../../assets/images/beready2.jpg'),
  require('../../assets/images/beready3.jpg'),
  require('../../assets/images/beready4.jpg'),
  require('../../assets/images/beready5.jpg'),
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.flex}>
      <View style={styles.card}>
        <Text style={styles.cardText}>
          PROTECT YOURSELF AND OTHERS FROM GETTING SICK
        </Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{height: 270, marginTop: 20}}>
          {CAROUSEL_ONE.map((item, index) => (
            <Image
              source={item}
              resizeMode="contain"
              style={styles.scrollImage}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.cardBlue}>
        <Text style={styles.cardTextWhite}>HELPING THOSE IN NEED</Text>
        <View style={styles.pmCareCard}>
          <Image
            source={require('../../assets/images/health.png')}
            style={{
              height: SIZES.width / 5,
              width: SIZES.width / 5,
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text style={{...FONTS.h4}}>Contribute towards </Text>
            <Text
              style={{
                ...FONTS.h4,
                color: '#0099cb',
              }}>
              PM-CARES Fund{' '}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.black,
              }}>
              Encourage research & and aid quality treatment to beat COVID-19
            </Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => {
                Linking.openURL(PM_CARE_LINK);
              }}>
              <Text style={{color: 'white', ...FONTS.body4}}>Donate Now</Text>
              <Icon name="keyboard-arrow-right" color="white" size={18} />
            </TouchableOpacity>
          </View>
          <Image
            source={require('../../assets/images/pmcare.jpg')}
            resizeMode="cover"
            style={{
              alignSelf: 'flex-start',
              width: SIZES.width / 6,
              height: 20,
            }}
          />
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>BE READY FOR CORONAVIRUS</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{height: 270, marginTop: 20}}>
          {CAROUSEL_TWO.map((item, index) => (
            <Image
              source={item}
              resizeMode="contain"
              style={styles.scrollImage}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Thank You India for your continued trust and support.
        </Text>
        <Text style={styles.footerText}>
          We are committed to serving you,always.
        </Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
