import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { rna_data } from "../../genetic_elements_data";

const RNASection = () => {
  return (
    <div id="section_RNA">
      <h2>RNA</h2>
      <div id="RNA_Draw">
        <DrawFeatures
          id_drawPlace="RNA_Draw"
          id_canvas="RNA_canvas01"
          dnaFeatures_data={rna_data}
        />
      </div>
    </div>
  );
};

export default RNASection;
