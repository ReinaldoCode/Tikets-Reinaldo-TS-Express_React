import { ResponsiveLine } from '@nivo/line';
const data = [
  {
    id: 'japan',
    color: 'hsl(62, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 61,
      },
      {
        x: 'helicopter',
        y: 188,
      },
      {
        x: 'boat',
        y: 272,
      },
      {
        x: 'train',
        y: 45,
      },
      {
        x: 'subway',
        y: 127,
      },
      {
        x: 'bus',
        y: 23,
      },
      {
        x: 'car',
        y: 72,
      },
      {
        x: 'moto',
        y: 39,
      },
      {
        x: 'bicycle',
        y: 67,
      },
      {
        x: 'horse',
        y: 51,
      },
      {
        x: 'skateboard',
        y: 99,
      },
      {
        x: 'others',
        y: 44,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(347, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 243,
      },
      {
        x: 'helicopter',
        y: 182,
      },
      {
        x: 'boat',
        y: 199,
      },
      {
        x: 'train',
        y: 269,
      },
      {
        x: 'subway',
        y: 11,
      },
      {
        x: 'bus',
        y: 223,
      },
      {
        x: 'car',
        y: 40,
      },
      {
        x: 'moto',
        y: 260,
      },
      {
        x: 'bicycle',
        y: 238,
      },
      {
        x: 'horse',
        y: 27,
      },
      {
        x: 'skateboard',
        y: 256,
      },
      {
        x: 'others',
        y: 166,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(223, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 6,
      },
      {
        x: 'helicopter',
        y: 121,
      },
      {
        x: 'boat',
        y: 163,
      },
      {
        x: 'train',
        y: 271,
      },
      {
        x: 'subway',
        y: 16,
      },
      {
        x: 'bus',
        y: 207,
      },
      {
        x: 'car',
        y: 114,
      },
      {
        x: 'moto',
        y: 100,
      },
      {
        x: 'bicycle',
        y: 182,
      },
      {
        x: 'horse',
        y: 116,
      },
      {
        x: 'skateboard',
        y: 174,
      },
      {
        x: 'others',
        y: 164,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(315, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 20,
      },
      {
        x: 'helicopter',
        y: 219,
      },
      {
        x: 'boat',
        y: 126,
      },
      {
        x: 'train',
        y: 51,
      },
      {
        x: 'subway',
        y: 193,
      },
      {
        x: 'bus',
        y: 297,
      },
      {
        x: 'car',
        y: 31,
      },
      {
        x: 'moto',
        y: 272,
      },
      {
        x: 'bicycle',
        y: 5,
      },
      {
        x: 'horse',
        y: 66,
      },
      {
        x: 'skateboard',
        y: 20,
      },
      {
        x: 'others',
        y: 4,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(129, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 93,
      },
      {
        x: 'helicopter',
        y: 144,
      },
      {
        x: 'boat',
        y: 11,
      },
      {
        x: 'train',
        y: 280,
      },
      {
        x: 'subway',
        y: 80,
      },
      {
        x: 'bus',
        y: 292,
      },
      {
        x: 'car',
        y: 258,
      },
      {
        x: 'moto',
        y: 82,
      },
      {
        x: 'bicycle',
        y: 57,
      },
      {
        x: 'horse',
        y: 202,
      },
      {
        x: 'skateboard',
        y: 154,
      },
      {
        x: 'others',
        y: 105,
      },
    ],
  },
];
export const MonthExpenses = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=' >-.2f'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel='data.yFormatted'
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          //   symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                // itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
