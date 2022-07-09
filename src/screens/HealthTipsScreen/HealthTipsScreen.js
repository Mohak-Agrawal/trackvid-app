import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
import {FONTS} from '../../constants/Theme';

const HEALTH_TIPS = [
  {
    title: 'Nutrition Tips',
    image: require('../../assets/images/nutrition.jpg'),
    id: '1',
  },
  {
    title: 'Fitness Tips',
    image: require('../../assets/images/fitness.jpg'),
    id: '2',
  },
  {
    title: 'Mental Health Tips',
    image: require('../../assets/images/mentalhealth.jpg'),
    id: '3',
  },
  {
    title: 'Hygiene Tips',
    image: require('../../assets/images/hygiene.jpg'),
    id: '4',
  },
];

const HealthTipsScreen = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={HEALTH_TIPS}
        renderItem={({item}) => renderItem(item, props)}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

function renderItem(item, props) {
  return (
    <View style={styles.healthCard}>
      <View styles={{height: '100%'}}>
        <Image source={item.image} style={styles.healthImage} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() =>
            props.navigation.navigate('TipsDetails', {
              category: item.title,
            })
          }>
          <Text style={{color: 'white', ...FONTS.body4}}>{item.title}</Text>
          <Icon name="keyboard-arrow-right" color="white" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HealthTipsScreen;
