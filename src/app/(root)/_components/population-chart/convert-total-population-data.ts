import { IPopulation } from "@/app/(root)";
import { DataItem } from "./index";

export const convertTotalPopulationData = (
  populationList: IPopulation[]
): DataItem[][] => {
  return populationList.map((population: IPopulation) => {
    const prefName = population.prefName;
    const totalPopulationData = population.result.data[0].data;
    return totalPopulationData.map((data) => {
      return {
        year: data.year,
        [prefName]: data.value / 10000,
      };
    });
  });
};
