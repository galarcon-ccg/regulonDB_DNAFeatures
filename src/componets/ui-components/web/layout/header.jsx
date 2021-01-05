/*Testing Version 0.0.1 */

import React from "react";
import { Image } from "../../ui_components";
import * as logo from "./resources/regulonDB.png";

// dropbox image
const urlLogo = "https://www.dropbox.com/s/opzvt9e0598xcq6/regulonDB.png?dl=1";
const Header = () => {
  return (
    <div>
      <Image
        id={"logoRegulon"}
        imgTitle="RegulonDB logo"
        imgAlt="Logo of RegulonDB"
        urlImage={urlLogo}
        imgStyle={{ maxWidth: "239px", maxHeight: "48px" }}
      />
    </div>
  );
};

export default Header;
