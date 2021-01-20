import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { terminator_data } from "../../genetic_elements_data";

const TerminatorSection = () => {
  return (
    <div id="section_Terminator">
      <h2>Terminator</h2>
      <div id="ter_Draw">
        <DrawFeatures
          id_drawPlace="ter_Draw"
          id_canvas="ter_canvas01"
          dnaFeatures_data={terminator_data}
        />
      </div>
    </div>
  );
};

export default TerminatorSection;
