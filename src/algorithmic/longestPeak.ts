enum PointStatus {
  IsStartOfProcess = "IsStartOfProcess",
  IsProcessing = "IsProcessing",
  IsAPeak = "isAPeak",
  IsNotAPeak = "isNotAPeak",
}

const getPointStatus = ({
  prevValue,
  currValue,
  nextValue,
}: {
  prevValue: number;
  currValue: number;
  nextValue: number;
}): PointStatus => {
  const isCurrValueSmallerThanPrevAndNext =
    currValue < prevValue && currValue < nextValue;
  const isCurrValueEqualToPrevAndSmallerThanNext =
    currValue === prevValue && currValue < nextValue;
  const isCurrValueGreaterThanPrevAndNext =
    currValue > prevValue && currValue > nextValue;
  const isCurrValueEqualToPrevAndGreaterThanNext =
    currValue === prevValue && currValue > nextValue;
  const isCurrValueSmallerThanPrevAndEqualToNext =
    currValue < prevValue && currValue === nextValue;

  if (
    isCurrValueSmallerThanPrevAndNext ||
    isCurrValueEqualToPrevAndSmallerThanNext
  ) {
    return PointStatus.IsStartOfProcess;
  }

  if (isCurrValueGreaterThanPrevAndNext) {
    return PointStatus.IsAPeak;
  }

  if (
    isCurrValueEqualToPrevAndGreaterThanNext ||
    isCurrValueSmallerThanPrevAndEqualToNext
  ) {
    return PointStatus.IsNotAPeak;
  }

  return PointStatus.IsProcessing;
};

const updateLongestPeak = (longestPeak: number, accumulator: number) =>
  Math.max(longestPeak, accumulator);

export const longestPeak = (arrayOfIntegers: number[]): number => {
  let longestPeak = 0;
  let isPeak = false;
  let accumulator = 0;

  for (let i = 0; i < arrayOfIntegers.length; i++) {
    const currentPointStatus = getPointStatus({
      prevValue: arrayOfIntegers[i - 1],
      currValue: arrayOfIntegers[i],
      nextValue: arrayOfIntegers[i + 1],
    });

    if (isPeak && currentPointStatus === PointStatus.IsNotAPeak) {
      accumulator++;
      longestPeak = updateLongestPeak(longestPeak, accumulator);
      isPeak = false;
    }

    if (currentPointStatus === PointStatus.IsStartOfProcess) {
      if (isPeak) {
        accumulator++;
        longestPeak = updateLongestPeak(longestPeak, accumulator);
      }
      accumulator = 1;
    }

    if (currentPointStatus === PointStatus.IsProcessing) {
      accumulator++;
    }

    if (currentPointStatus === PointStatus.IsAPeak) {
      accumulator++;
      isPeak = true;
    }

    if (isPeak) {
      longestPeak = updateLongestPeak(longestPeak, accumulator);
    }
  }

  return longestPeak;
};
