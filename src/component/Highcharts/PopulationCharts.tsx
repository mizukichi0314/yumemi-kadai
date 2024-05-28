import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { PopulationDataType, PopulationDataYear } from '../../types/Prefectures';

interface Props {
  prefecturePopulation: PopulationDataYear;
  populationComposition: PopulationDataType;
  prefectureNames: {[key: number]: string}; 
}

export const PopulationCharts = ({
  prefecturePopulation,
  populationComposition,
  prefectureNames,
}: Props): JSX.Element => {
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff0000', '#00ff00', '#0000ff'];
  const prefCodes = Object.keys(prefecturePopulation);

  const allData = prefCodes.flatMap((prefCode) => 
    prefecturePopulation[prefCode]?.map((item) => ({
      year: item.year,
      [prefectureNames[parseInt(prefCode)]]: item.value,
    })) || []
  );

  const mergedData = allData.reduce((acc: {year: number; [key:string]: number}[], item) => {
    const existing = acc.find((d) => d.year === item.year);
    if (existing) {
      return acc.map((d) =>
        d.year === item.year ? { ...d, ...item } : d
      );
    }
    return [...acc, item];
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={mergedData} margin={{ top: 50, left: 50, right: 50, bottom: 50 }}>
         <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
         <XAxis dataKey="year" type="number" domain={[1960, 2020]} />
         <YAxis type="number" domain={['0', 'auto']} />
         <Tooltip />
         <Legend />
          {Object.values(prefectureNames).map((prefName, index) => (
          <Line
            key={prefName}
            type="monotone"
            dataKey={prefName}
            stroke={colors[index % colors.length]}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};