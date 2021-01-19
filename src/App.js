/**
 * testing version 0.0.2
 */

import React from "react";
import "./regulonDB_global.css";
import {
  DNAsection,
  GeneSection,
  OperonSection,
  PpGppSection
} from "./componets/sections/sections";
import { Header, Cover } from "./componets/ui-components/ui_components";

const ge = ["DNA", "Genes", "Operon", "ppGpp"];

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
        <PpGppSection />
      </article>
      <aside>
        <div style={{ position: "fixed", top: 0 }}>
          {ge.map((l) => {
            return (
              <div key={l}>
                <a href={`#section_${l}`}>{l}</a>
              </div>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
