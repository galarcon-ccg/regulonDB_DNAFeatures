import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { Gene_data } from "../../genetic_elements_data";

const GeneSection = () => {
  return (
    <div id="section_gene">
      <h2>Gene</h2>
      <div id="gene_Draw">
        <DrawFeatures
          id_drawPlace="gene_Draw"
          id_canvas="gene_canvas01"
          dnaFeatures_data={Gene_data}
        />
      </div>
    </div>
  );
};

export default GeneSection;
