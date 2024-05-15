import axios from 'axios';
import { Prefectures } from '../types/Prefectures';


const FetchPrefectures = async():Promise<Prefectures[]> => {
  try {
    const response = await axios.get (
      'https://opendata.resas-portal.go.jp/api/v1/prefectures',
      {
        headers: {
          'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
        },
      }
    );

    if (response.data.statusCode === "403") {
      throw new Error("403 Forbidden");
    }
  
    if (response.data.statusCode === "404") {
      throw new Error("404 Not Found");
    }if (response.data.statusCode === "403") {
      throw new Error("403 Forbidden");
    }
  
    if (response.data.statusCode === "404") {
      throw new Error("404 Not Found");
    }
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export default FetchPrefectures;