//Transnational_Attenuator
import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { tnA_data } from "../../genetic_elements_data";

const Transnational_ASection = () => {
  return (
    <div id="section_Transnational_Attenuator">
      <h2>Transnational_Attenuator</h2>
      <div id="tnA_Draw">
        <DrawFeatures
          id_drawPlace="tnA_Draw"
          id_canvas="tnA_canvas03"
          dnaFeatures_data={tnA_data}
        />
      </div>
    </div>
  );
};

export default Transnational_ASection;
