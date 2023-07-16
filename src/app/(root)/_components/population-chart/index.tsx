"use client";
import { IPopulation, populationAtom } from "@/app/(root)";
import { useAtomValue } from "jotai";
import { convertTotalPopulationData } from "./convert-total-population-data";
import { PopulationChartPresenter } from "./index.presenter";
import { mergePopulationData } from "./merge-population-data";

export type DataItem = { year: number; [key: string]: number };

export const PopulationChart = () => {
  const values: IPopulation[] = useAtomValue(populationAtom);
  const totalPopulationData = convertTotalPopulationData(values);
  const chartData = mergePopulationData(totalPopulationData);

  return <PopulationChartPresenter data={chartData} />;
};
