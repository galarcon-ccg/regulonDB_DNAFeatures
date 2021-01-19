import React from "react";
import { DrawFeatures } from "../dnaFeaturesGL/dna_features";
import { promotor_data } from "../../genetic_elements_data";

const PromoterSection = () => {
  return (
    <div id="section_Promoter">
      <h2>Promoter</h2>
      <div id="promo_Draw">
        <DrawFeatures
          id_drawPlace="promo_Draw"
          id_canvas="promo_canvas03"
          dnaFeatures_data={promotor_data}
        />
      </div>
    </div>
  );
};

export default PromoterSection;
