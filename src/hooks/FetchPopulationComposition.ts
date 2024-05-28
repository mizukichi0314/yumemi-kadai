import axios from 'axios'
import { PopulationCompositionResponse, PopulationData } from '../types/Prefectures';

export const fetchPopulationComposition = async (prefCode: number): Promise<PopulationData[]> => {
  try {
    const apiKey = import.meta.env.VITE_RESAS_API_KEY;
    // console.log('apiキー:', apiKey);
    const response = await axios.get<PopulationCompositionResponse> (
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
      {
        headers: {
          'X-API-KEY': apiKey,
        },
      }
    );
    // console.log('APIレスポンス：',response.data);
    return response.data.result.data;
  } catch (error) {
    console.error('Error fetching population composition data', error);
    throw error;
  }
};
