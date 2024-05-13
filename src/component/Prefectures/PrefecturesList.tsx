import React from "react";
import { Checkbox } from "../Parts/Checkbox";
import { Prefectures } from "../../types/Prefectures";


interface PrefecturesProps {
  data: Prefectures | undefined;
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
      <h2>都道府県一覧</h2>
      <form>
        <ul>
          {data?.result.map((prefecture, key) => {
            return (
              <li key={key}>
                <Checkbox
                  id={prefecture.prefCode}
                  value={prefecture.prefName}
                  text={prefecture.prefName}
                  handleChange={handleChange}
                  isCheckbox={isCheckbox}
                />
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};

