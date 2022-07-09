import {COUNTRY_CASES_API, STATE_CASES_API} from '../constants/Strings';

export const getCountryCases = async () => {
  let resp = await fetch(COUNTRY_CASES_API);
  let respJson = await resp.json();

  let array = [];
  respJson.map((item, index) => {
    array.push({
      country: item.country,
      cases: item.cases,
      recovered: item.recovered,
      deaths: item.deaths,
    });
  });
  return array;
};

export const getStateCases = async () => {
  let resp = await fetch(STATE_CASES_API);
  let respJson = await resp.json();
  let array = [];
  respJson.statewise.map((item, index) => {
    array.push({
      country: item.state,
      cases: item.confirmed,
      recovered: item.recovered,
      deaths: item.deaths,
    });
  });
  return array;
};
