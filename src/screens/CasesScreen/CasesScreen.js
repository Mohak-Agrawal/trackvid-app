import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
import NetInfo from '@react-native-community/netinfo';
import CasesCard from '../../components/CasesCard';
import {COUNTRY_CASES_API} from '../../constants/Strings';
import {COLORS} from '../../constants/Theme';
import {getCountryCases, getStateCases} from '../../services/CasesApi';

const CasesScreen = props => {
  const type = props.route.name;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        fetchData();
      } else {
        setData(null);
        setLoading(false);
      }
    });
  }, [type]);

  const fetchData = async () => {
    let data;
    type == 'CountryCases'
      ? (data = await getCountryCases())
      : (data = await getStateCases());
    setData(data);
    setLoading(false);
  };

  return loading ? (
    <View
      style={[
        styles.container,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <ActivityIndicator color={COLORS.secondary} size="large" />
    </View>
  ) : (
    <View style={styles.container}>
      <CasesCard
        first=""
        second="Confirmed"
        third="Recovered"
        fourth="Deaths*"
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CasesCard
            first={item.country}
            second={item.cases}
            third={item.recovered}
            fourth={item.deaths}
          />
        )}
        keyExtractor={item => item.country.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CasesScreen;
