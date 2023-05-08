import { longestPeak } from "@/algorithmic/longestPeak";

describe("Longest Peak", () => {
  it("Should find a long peak of 3 points", () => {
    expect(longestPeak([0, 1, 0])).toEqual(3);
  });

  it("Should find a long peak of 3 points", () => {
    expect(longestPeak([1, 0, 1, 0])).toEqual(3);
  });

  it("Should not find peak", () => {
    expect(longestPeak([1, 2, 3, 3, 4])).toEqual(0);
  });

  it("Should find a long peak of 6 points", () => {
    expect(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])).toEqual(6);
  });

  it("Should find a long peak of 5 points", () => {
    expect(longestPeak([1, 2, 3, 2, 1, 1])).toEqual(5);
  });

  it("Should find a long peak of 9 points", () => {
    expect(
      longestPeak([
        1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3,
        4, 5, 0, -1, -1,
      ])
    ).toEqual(9);
  });
});
