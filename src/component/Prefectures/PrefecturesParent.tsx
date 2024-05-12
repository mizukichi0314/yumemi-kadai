import { useState } from "react";
import Prefectures from "./Prefectures";

const PrefecturesParent: React.FC = () => {
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, prefCode: number) => {
    const isChecked = !selectedPrefectures.includes(prefCode);
    if (isChecked) {
      setSelectedPrefectures((prevState) =>
      [...prevState, prefCode]);
    } else {
      setSelectedPrefectures((prevState) =>
      prevState.filter((code) => code !== prefCode)
      );
    }
  };

  return (
    <>
      <Prefectures
        onChange={handleCheckboxChange}
        selectedPrefectures={selectedPrefectures}
      />
    </>
  )
}

export default PrefecturesParent;