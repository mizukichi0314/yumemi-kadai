export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface Prefectures {
  message: string | null;
  result: Prefecture[];
}

export type PopulationDataType = 
  | 'total'
  | 'young'
  | 'production age'
  | 'elderly';

export interface PopulationDataYear {
  year: number;
  [prefecture: string]: number;
}