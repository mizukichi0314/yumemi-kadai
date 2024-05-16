import React from "react";
import { Checkbox } from "../Parts/Checkbox";
import { Prefecture } from "../../types/Prefectures";

interface PrefecturesProps {
  data: Prefecture[];
  isCheckbox: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PrefecturesList = ({
  data,
  isCheckbox,
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
              isCheckbox={false}
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

