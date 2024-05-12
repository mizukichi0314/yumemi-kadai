import axios from "axios";

const API_KEY = import.meta.env.VITE_RESAS_API_KEY;

export const getPrefectures = async () => {
  try {
    const response = await
    axios.get (`https://opendata.resas-portal.go.jp/api/v1/prefectures`, {
      headers: {
        'X-API-KEY':API_KEY,
      },
    });
    return response.data.result;
  } catch (error) {
    console.error ('Error fetching prefectures:', error);
    throw error;
  }
};
