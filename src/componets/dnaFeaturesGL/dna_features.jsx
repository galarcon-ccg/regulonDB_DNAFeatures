import React from "react";
import { ValidateElements, ValidateDNA, validateOverlap } from "./validation";
import Canvas from "./canvas";
export const DrawFeatures = ({
  id_drawPlace,
  id_canvas,
  dnaFeatures_data,
  width = "auto",
  height = "auto",
  dna_pos = "auto"
}) => {
  dnaFeatures_data = ValidateDNA(dnaFeatures_data);
  dnaFeatures_data = ValidateElements(dnaFeatures_data);
  dnaFeatures_data = validateOverlap(dnaFeatures_data);
  if (dnaFeatures_data) {
    //console.log(dnaFeatures_data);
    return (
      <Canvas
        id_canvas={id_canvas}
        id_drawPlace={id_drawPlace}
        dnaFeatures_data={dnaFeatures_data}
        width={width}
        height={height}
        dna_pos={dna_pos}
      />
    );
  }
  return <p>data not valid for drawing</p>;
};
