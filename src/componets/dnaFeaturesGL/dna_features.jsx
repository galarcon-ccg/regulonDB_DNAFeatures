import React from "react";
import { ValidateElements, ValidateDNA } from "./validation";
import Canvas from "./canvas";
export const DrawFeatures = ({ id_drawPlace, id_canvas, dnaFeatures_data }) => {
  dnaFeatures_data = ValidateDNA(dnaFeatures_data);
  dnaFeatures_data = ValidateElements(dnaFeatures_data);
  if (dnaFeatures_data) {
    //console.log(dnaFeatures_data);
    return (
      <Canvas
        id_canvas={id_canvas}
        id_drawPlace={id_drawPlace}
        dnaFeatures_data={dnaFeatures_data}
      />
    );
  }
  return <p>data not valid for drawing</p>;
};
