import React from 'react';
import { PopulationDataType } from '../../types/Prefectures';
import { Radio } from '../Parts/Radio';

interface PopulationCompositionProps {
  populationComposition: PopulationDataType;
  setPopulationComposition: (newComposition: PopulationDataType) => void;
}

export const PopulationComposition = ({
  populationComposition,
  setPopulationComposition,
}: PopulationCompositionProps) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPopulationComposition (e.target.value as PopulationDataType);
  };

  return (
    <fieldset className='composition'>
      <legend>人口構成：</legend>
      <div className='composition-list'>
        <Radio
          value='総人口'
          text='総人口'
          checkedValue={populationComposition}
          handleRadioChange={handleRadioChange}
        />
      </div>

      <div className='composition-list'>
        <Radio
          value='年少人口'
          text='年少人口'
          checkedValue={populationComposition}
          handleRadioChange={handleRadioChange}
        />
      </div>

      <div className='composition-list'>
        <Radio
          value='生産年齢人口'
          text='生産年齢人口'
          checkedValue={populationComposition}
          handleRadioChange={handleRadioChange}
        />
      </div>

      <div className='composition-list'>
        <Radio
          value='老年人口'
          text='老年人口'
          checkedValue={populationComposition}
          handleRadioChange={handleRadioChange}
        />
      </div>
    </fieldset>
  );
};