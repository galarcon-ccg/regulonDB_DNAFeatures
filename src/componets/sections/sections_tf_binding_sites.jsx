import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { sites_data } from "../../genetic_elements_data";

const SitesSection = () => {
  return (
    <div id="section_Sites">
      <h2>TF Binding Sites</h2>
      <div id="sites_Draw">
        <DrawFeatures
          id_drawPlace="sites_Draw"
          id_canvas="sites_canvas01"
          dnaFeatures_data={sites_data}
        />
      </div>
    </div>
  );
};

export default SitesSection;
