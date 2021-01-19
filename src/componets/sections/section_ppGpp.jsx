import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { ppGpp_data } from "../../genetic_elements_data";

const PpGppSection = () => {
  return (
    <div id="section_ppGpp">
      <h2>ppGpp</h2>
      <div id="pp_Draw">
        <DrawFeatures
          id_drawPlace="pp_Draw"
          id_canvas="pp_canvas03"
          dnaFeatures_data={ppGpp_data}
        />
      </div>
    </div>
  );
};

export default PpGppSection;
