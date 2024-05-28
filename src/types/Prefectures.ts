export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface PrefectureResponse {
  message: string | null;
  result: Prefecture[];
}

export type PopulationDataType = 
  | '総人口'
  | '年少人口'
  | '生産年齢人口'
  | '老年人口';


  export interface PopulationDataItem {
    year: number;
    value: number;
  }
export interface PopulationDataYear {
  [year: number]: PopulationDataItem[];
}