/**
 * testing version 0.0.2
 */

import React from "react";
import "./regulonDB_global.css";
import {
  DNAsection,
  GeneSection,
  OperonSection
} from "./componets/sections/sections";
import { Header, Cover } from "./componets/ui-components/ui_components";

export default function App() {
  return (
    <div>
      <Header />
      <Cover>
        <h1>DNA Features Graphic Library</h1>
      </Cover>
      <article>
        <br />
        <p>Description</p>
        <DNAsection />
        <GeneSection />
        <OperonSection />
      </article>
    </div>
  );
}
