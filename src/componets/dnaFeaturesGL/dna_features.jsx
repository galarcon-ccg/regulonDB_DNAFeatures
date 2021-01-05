import React from "react";
import { ValidateElements, ValidateDNA } from "./validation";
//import Canvas from "./Canvas";
export const DrawFeatures = ({ id_drawPlace, idCanvas, dnaFeatures_data }) => {
  dnaFeatures_data = ValidateDNA(dnaFeatures_data);
  dnaFeatures_data = ValidateElements(dnaFeatures_data);
  if (dnaFeatures_data) {
    console.log(dnaFeatures_data);
    return <></>;
  }
  return <p>data not valid for drawing</p>;
};
