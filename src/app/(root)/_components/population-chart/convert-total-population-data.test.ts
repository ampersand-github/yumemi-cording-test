import { IPopulation } from "@/app/(root)";
import { convertTotalPopulationData } from "./convert-total-population-data";

describe("convertTotalPopulationData", () => {
  const mockInput: IPopulation[] = [
    {
      prefCode: 1,
      prefName: "Tokyo",
      result: {
        boundaryYear: 2021,
        data: [
          {
            label: "総人口",
            data: [
              { year: 2020, value: 20000 },
              { year: 2021, value: 21000 },
            ],
          },
        ],
      },
    },
    {
      prefCode: 2,
      prefName: "Osaka",
      result: {
        boundaryYear: 2021,
        data: [
          {
            label: "総人口",
            data: [
              { year: 2020, value: 15000 },
              { year: 2021, value: 15500 },
            ],
          },
        ],
      },
    },
  ];

  const expectedOutput = [
    [
      { year: 2020, Tokyo: 2 },
      { year: 2021, Tokyo: 2.1 },
    ],
    [
      { year: 2020, Osaka: 1.5 },
      { year: 2021, Osaka: 1.55 },
    ],
  ];

  it("指定した引数を渡したとき、指定したデータが生成されるべき", () => {
    expect(convertTotalPopulationData(mockInput)).toEqual(expectedOutput);
  });
});
