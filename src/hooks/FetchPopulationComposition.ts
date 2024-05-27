import axios from 'axios'

export const fetchPopulationComposition = async (prefCode: number) => {
  try {
    const apiKey = import.meta.env.VITE_RESAS_API_KEY;
    // console.log('apiキー:', apiKey);
    const response = await axios.get (
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
