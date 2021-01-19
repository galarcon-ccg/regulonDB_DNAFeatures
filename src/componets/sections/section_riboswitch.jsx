import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { Riboswitch_data } from "../../genetic_elements_data";

const RiboswitchSection = () => {
  return (
    <div id="section_Riboswitch">
      <h2>Riboswitch</h2>
      <div id="Riboswitch_Draw">
        <DrawFeatures
          id_drawPlace="Riboswitch_Draw"
          id_canvas="Riboswitch_canvas01"
          dnaFeatures_data={Riboswitch_data}
        />
      </div>
    </div>
  );
};

export default RiboswitchSection;
