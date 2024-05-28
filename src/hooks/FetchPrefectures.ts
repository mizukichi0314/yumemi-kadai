import axios from 'axios';
import { Prefecture } from '../types/Prefectures';


const FetchPrefectures = async():Promise<Prefecture[]> => {
  try {
    const response = await axios.get (
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
        },
      }
    );
    // console.log(response.data);
    return response.data.result;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export default FetchPrefectures;