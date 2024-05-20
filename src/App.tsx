import Header from "./component/Header/Header";
import "./App.css"
import { useEffect, useState } from "react";
import { PopulationDataType, Prefecture } from "./types/Prefectures";
import FetchPrefectures from "./hooks/FetchPrefectures";
import { PrefecturesList } from "./component/Prefectures/PrefecturesList";
import { PopulationComposition } from "./component/population/PopulationComposition";

const App = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);
  const [populationComposition, setPopulationComposition] = useState<PopulationDataType>('total');

  useEffect(() => {
    const fetchPrefecturesData = async () => {
      try {
        const prefecture = await FetchPrefectures();
        setPrefectures(prefecture);
      } catch(error) {
        console.error ('Error fetching prefectures data', error);
      }
    };
    fetchPrefecturesData();
  }, []);


  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const prefCode = parseInt(event.target.id);
    if (event.target.checked) {
      setSelectedPrefectures((prevSelected) => 
      [...prevSelected, prefCode]);
    } else {
      setSelectedPrefectures((prevSelected) =>
      prevSelected.filter((code) => code !== prefCode)
      );
    }
  }
  return (
    <>
      <Header />
      <section>
        <PrefecturesList
          data={prefectures}
          isCheckbox={true}
          handleChange={handleCheckboxChange}
        />
        <ul>
          {selectedPrefectures.map((prefCode) => (
            <li key={prefCode}>{prefCode}</li>
          ))}
        </ul>
      </section>

      <section>
        <PopulationComposition
          populationComposition={populationComposition}
          setPopulationComposition={setPopulationComposition}
        />
      </section>
    </>
  );
};

export default App;

