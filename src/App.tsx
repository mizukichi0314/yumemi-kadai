import Header from "./component/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";
import { PopulationDataType, Prefecture, PopulationDataYear } from "./types/Prefectures";
import FetchPrefectures from "./hooks/FetchPrefectures";
import { PrefecturesList } from "./component/Prefectures/PrefecturesList";
import { PopulationComposition } from "./component/population/PopulationComposition";
import { fetchPopulationComposition } from "./hooks/FetchPopulationComposition";
import { PopulationCharts } from "./component/Highcharts/PopulationCharts";

const App = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);
  const [populationComposition, setPopulationComposition] = useState<PopulationDataType>('総人口');
  const [populationData, setPopulationData] = useState<PopulationDataYear>({});

  useEffect(() => {
    const fetchPrefecturesData = async () => {
      try {
        const prefecture = await FetchPrefectures();
        setPrefectures(prefecture);
      } catch (error) {
        console.error('Error fetching prefectures data', error);
      }
    };
    fetchPrefecturesData();
  }, []);

  useEffect(() => {
    const fetchPopulationData = async (prefCode: number) => {
      try {
        const data = await fetchPopulationComposition(prefCode);
        const populationDataItem = data.find((d) => d.label === populationComposition);
        return { [prefCode]: populationDataItem ? populationDataItem.data : [] };
      } catch (error) {
        console.error('Error fetching population composition data', error);
        return {};
      }
    };

    const fetchAllSelectedPrefecturesData = async () => {
      const allData = await Promise.all(selectedPrefectures.map(prefCode => fetchPopulationData(prefCode)));
      const combinedData = allData.reduce((acc, data) => ({ ...acc, ...data }), {});
      setPopulationData(combinedData);
    };

    if (selectedPrefectures.length > 0) {
      fetchAllSelectedPrefecturesData();
    } else {
      setPopulationData({});
    }
  }, [selectedPrefectures, populationComposition]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prefCode = parseInt(event.target.id);
    if (event.target.checked) {
      setSelectedPrefectures((prevSelected) => [...prevSelected, prefCode]);
    } else {
      setSelectedPrefectures((prevSelected) => prevSelected.filter((code) => code !== prefCode));
    }
  };

  const handlePopulationCompositionChange = (newComposition: PopulationDataType) => {
    setPopulationComposition(newComposition);
  };

  const getPrefectureName = (prefCode: number) => {
    const pref = prefectures.find((pref) => pref.prefCode === prefCode);
    return pref ? pref.prefName : '';
  };

  const prefectureNames = selectedPrefectures.reduce((acc, prefCode) => {
    const prefName = getPrefectureName(prefCode);
    if (prefName) {
      acc[prefCode] = prefName;
    }
    return acc;
  }, {} as { [key: number]: string}); 

  return (
    <>
      <Header />
      <section>
        <PrefecturesList
          data={prefectures}
          selectedPrefectures={selectedPrefectures}
          handleChange={handleCheckboxChange}
        />
      </section>

      <section>
        <PopulationComposition
          populationComposition={populationComposition}
          setPopulationComposition={handlePopulationCompositionChange}
        />
        {selectedPrefectures.length > 0 && (
          <PopulationCharts
            prefecturePopulation={populationData}
            prefectureNames={prefectureNames}
          />
        )}
      </section>
    </>
  );
};

export default App;