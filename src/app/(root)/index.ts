"use client";
import { atom } from "jotai";

export interface IPopulation {
  prefCode: number;
  prefName: string;
  result: {
    boundaryYear: number;
    data: [
      {
        label: "総人口" | "年少人口" | "生産年齢人口" | "老年人口";
        data: Array<{ year: number; value: number }>;
      }
    ];
  };
}

export const populationAtom = atom<IPopulation[]>([]);
export { PrefecturesCheckBox } from "./_components/prefectures-checkbox";
export { PopulationChart } from "./_components/population-chart";
