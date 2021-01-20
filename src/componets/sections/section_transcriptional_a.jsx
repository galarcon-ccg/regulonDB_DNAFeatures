import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { tcA_data } from "../../genetic_elements_data";

const Transcriptional_ASection = () => {
  return (
    <div id="section_Transcriptional_Attenuator">
      <h2>Transcriptional_Attenuator</h2>
      <div id="tcA_Draw">
        <DrawFeatures
          id_drawPlace="tcA_Draw"
          id_canvas="tcA_canvas03"
          dnaFeatures_data={tcA_data}
        />
      </div>
    </div>
  );
};

export default Transcriptional_ASection;
