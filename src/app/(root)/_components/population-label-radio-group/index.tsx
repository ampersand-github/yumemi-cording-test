"use client";

import { populationLabelAtom } from "@/app/(root)";
import { useSetAtom } from "jotai";
import { PopulationLabelRadioGroupPresenter } from "./index.presenter";

export const PopulationLabelRadioGroup = () => {
  const setLabel = useSetAtom(populationLabelAtom);
  return <PopulationLabelRadioGroupPresenter handleClick={setLabel} />;
};
