const isAPeak = ({
  prev,
  curr,
  next,
}: {
  prev: number;
  curr: number;
  next: number;
}) => curr > prev && curr > next;

export const longestPeak = (arr: number[]): number => {
  let maxPeakLength = 0;
  let counter = 0;
  let i = 0;
  let pointIndex = 0;

  let currentPointIsGreaterThenThePrevious = (pointIndex: number) =>
    arr[pointIndex] > arr[pointIndex - 1];
  let currentPointIsGreaterThenTheNext = (pointIndex: number) =>
    arr[pointIndex] > arr[pointIndex + 1];

  while (i < arr.length) {
    i++;
    if (isAPeak({ prev: arr[i - 1], curr: arr[i], next: arr[i + 1] })) {
      counter = 1;
      pointIndex = i;

      while (currentPointIsGreaterThenThePrevious(pointIndex)) {
        pointIndex = pointIndex - 1;
        counter++;
      }

      pointIndex = i;
      while (currentPointIsGreaterThenTheNext(pointIndex)) {
        pointIndex = pointIndex + 1;
        counter++;
      }

      maxPeakLength = Math.max(maxPeakLength, counter);
    }
  }
  return maxPeakLength;
};
