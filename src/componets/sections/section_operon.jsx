import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { Operon_data } from "../../genetic_elements_data";

const OperonSection = () => {
  return (
    <div id="section_Operon">
      <h2>Operon</h2>
      <div id="operon_Draw">
        <DrawFeatures
          id_drawPlace="operon_Draw"
          id_canvas="operon_canvas02"
          dnaFeatures_data={Operon_data}
        />
      </div>
    </div>
  );
};

export default OperonSection;
