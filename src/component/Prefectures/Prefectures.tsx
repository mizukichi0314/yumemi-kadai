import axios from "axios";
import { useEffect, useState } from "react";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefecturesProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>, prefCode: number) => void;
  selectedPrefectures: number[];
}

const Prefectures: React.FC<PrefecturesProps> = ({onChange, selectedPrefectures}) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
          // APIキーをenvファイルに格納してセキュリティ対策
          headers: {'X-API-KEY': process.env.REACT_APP_RESAS_API_KEY},
        });
        setPrefectures(response.data.result);
      } catch (error) { 
        console.error(error);
      }
    };
    fetchData();
  },[]);

  return(
    <div>
      <h2>都道府県一覧</h2>
      {prefectures ? (
        <div>
          {prefectures.map((prefecture) => (
            <div key={prefecture.prefCode}>
              <input
                type='checkbox'
                id={`Checkbox-${prefecture.prefCode}`}
                name={prefecture.prefName}
                checked={selectedPrefectures.includes(prefecture.prefCode)}
                onChange={(event) => onChange(event, prefecture.prefCode)} />
              <label htmlFor={`checkbox-${prefecture.prefName}`}>{prefecture.prefName}</label>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Prefectures;