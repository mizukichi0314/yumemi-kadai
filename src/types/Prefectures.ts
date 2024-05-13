export interface Prefecture {
  prefCode: number;
  prefName: string;
}

export interface Prefectures {
  message: string | null;
  result: Prefecture[];
}