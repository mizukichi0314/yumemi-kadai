import React from "react";
import { Checkbox } from "../Parts/Checkbox";
import { Prefecture } from "../../types/Prefectures";

interface PrefecturesProps {
  data: Prefecture[];
  selectedPrefectures: number[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PrefecturesList = ({
  data,
  selectedPrefectures,
  handleChange,
}: PrefecturesProps): JSX.Element => {

  return (
    <>
      <h2 className="section-title">都道府県を選択してください</h2>
      <ul className="prefectures-item">
      {Array.isArray(data) ? (
        data.map((prefecture, key) => (
          <li key={key}>
            <Checkbox
              id={prefecture.prefCode.toString()}
              value={prefecture.prefName}
              text={prefecture.prefName}
              handleChange={handleChange}
              isChecked={selectedPrefectures.includes(prefecture.prefCode)}
            />
          </li>
        ))
        ) : (
          <li>loading...</li>
        )}
      </ul>
    </>
  );
};

