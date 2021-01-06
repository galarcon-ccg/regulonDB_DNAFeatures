import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { DNA_data } from "../../genetic_elements_data";

const DNAsection = () => {
  return (
    <div id="section_dna">
      <h2>DNA</h2>
      <div id="dna_Draw">
        <DrawFeatures
          id_drawPlace="dna_Draw"
          id_canvas="dna_canvas"
          dnaFeatures_data={DNA_data}
        />
      </div>
    </div>
  );
};

export default DNAsection;
