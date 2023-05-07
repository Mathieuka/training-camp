enum peakStatus {
  hypotetical = "hypotetical",
  true = "true",
  false = "false",
  process = "process",
  startProcess = "start process",
}

const validatePeak = (values: { prev: number; curr: number; next: number }) => {
  const { prev, curr, next } = values;

  if (prev === undefined) {
    return peakStatus.startProcess;
  }

  if (curr > prev && curr > next) {
    return peakStatus.true;
  }

  if ((curr > prev && curr === next) || (curr < prev && curr === next)) {
    return peakStatus.false;
  }

  if ((curr < prev && curr < next) || (curr === prev && curr < next)) {
    return peakStatus.startProcess;
  }

  return peakStatus.process;
};

export const longestPeak = (arr: number[]) => {
  let longestPeak = 0;
  let inStartedProcessing = false;
  let peakValid = false;
  let accumulator = 0;

  for (let i = 0; i < arr.length; i++) {
    const status = validatePeak({
      prev: arr[i - 1],
      curr: arr[i],
      next: arr[i + 1],
    });

    if (status === peakStatus.startProcess || status === peakStatus.false) {
      if (peakValid) {
        accumulator++;
        if (accumulator > longestPeak) {
          longestPeak = accumulator;
        }
      }

      if (status === peakStatus.startProcess) {
        accumulator = 1;
      }

      if (status === peakStatus.false) {
        peakValid = false;
      }
    }

    if (status === peakStatus.process) {
      accumulator++;
    }

    if (status === peakStatus.true) {
      peakValid = true;
      accumulator++;
    }

    if (peakValid) {
      if (accumulator > longestPeak) {
        longestPeak = accumulator;
      }
    }
  }

  return longestPeak;
};
