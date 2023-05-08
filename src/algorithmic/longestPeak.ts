const updateLongestPeak = (longestPeak: number, accumulator: number) =>
  Math.max(longestPeak, accumulator);

export const longestPeak = (arr: number[]): number => {
  // iterate on numbers with while loop until index equal array length
  // check if is a peak
  // iterate on left side and count
  // iterate on right side and count
  // update index

  let i = 0;
  let iCount = 0;
  const isAPeak = ({
    prev,
    curr,
    next,
  }: {
    prev: number;
    curr: number;
    next: number;
  }) => curr > prev && curr > next;
  let counter = 0;
  while (i < arr.length) {
    i++;
    if (isAPeak({ prev: arr[i - 1], curr: arr[i], next: arr[i + 1] })) {
      counter++;

      if (arr[i] > arr[i - 1]) {
        counter++;
      }

      if (arr[i] > arr[i + 1]) {
        counter++;
      }

      // while (arr[i] > arr[i - 1]) {
      //
      // }
    }
  }
  return counter;
};
