import React from 'react';
import { PopulationDataType } from '../../types/Prefectures';
import { Radio } from '../Parts/Radio'

type PopulationData = Array<{
  value: PopulationDataType;
  text: string;
}>

const population: PopulationData = [
  {value: 'total', text: '総人口'},
  {value: 'young', text: '年少人口'},
  {value: 'production age', text: '生産年齢人口'},
  {value: 'elderly', text: '老年人口'}
];

interface Props {
  populationComposition: PopulationDataType;
  setPopulationComposition: React.Dispatch<React.SetStateAction<PopulationDataType>
  >; 
}

export const PopulationComposition = ({
  populationComposition,
  setPopulationComposition,
}: Props): JSX.Element => {

  return (
    <fieldset className='composition'>
      <legend>人口構成：</legend>
      {population.map((item, index) => {
        return (
          <div key={index} className='composition-item'>
            <Radio
              value={item.value}
              text={item.text}
              checkedValue={populationComposition}
              handleRadioChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPopulationComposition(item.value);
              }}
            />
          </div>
        );
      })}
    </fieldset>
  );
};
