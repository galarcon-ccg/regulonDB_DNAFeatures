import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { DNA_data } from "../../genetic_elements_data";

const DNAsection = () => {
  return (
    <div>
      <h2>DNA</h2>
      <div id="dna_Draw">
        <DrawFeatures id_drawPlace="dna_Draw" dnaFeatures_data={DNA_data} />
      </div>
    </div>
  );
};

export default DNAsection;
