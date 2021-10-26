import axios from 'axios';

const Api={
    searchCrypto:(crypto)=>{
        return axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}&order=market_cap_desc&per_page=100&page=1&sparkline=true`)
    }
};
export default Api