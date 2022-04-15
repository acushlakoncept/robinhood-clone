  
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Host': process.env.COIN_RANKING_HOST,
    'X-RapidAPI-Key': process.env.COIN_RANKING_API
  }
};


export const getCoins = () => {
  return axios.request(options).then(res => res.data.data.coins)
}
