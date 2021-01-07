import React, { useState, useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { draw_dna, draw_gene } from "./geneticElements/genetic_elements";

const Canvas = ({ dnaFeatures_data = [], id_drawPlace, id_canvas }) => {
  const [canvas, setCanvas] = useState();
  useEffect(() => {
    let drawPlace = document.getElementById(id_drawPlace);
    let newCanvas = document.getElementById(id_canvas);
    if (drawPlace && newCanvas === null) {
      newCanvas = DrawCanva(
        id_drawPlace,
        id_canvas,
        drawPlace.clientWidth,
        200
      );
      //console.log(newCanvas)
      if (!canvas) {
        setCanvas(newCanvas);
      }
    }
  }, [id_drawPlace, id_canvas, canvas]);
  if (!id_canvas) {
    console.warn("canvas has no id");
    return null;
  }
  if (!id_drawPlace) {
    console.warn("no DOM element id");
    return null;
  }
  if (canvas) {
    try {
      const dna_info = dnaFeatures_data.find(
        (feature) => feature?.objectType === "dna"
      );
      if (dna_info) {
        const dna = draw_dna({
          id: dna_info?._id,
          canva: canvas,
          leftEndPosition: dna_info?.leftEndPosition,
          rightEndPosition: dna_info?.rightEndPosition,
          labelName: dna_info?.labelName,
          stroke: stroke(dna_info),
          font: font(dna_info)
        });
        dnaFeatures_data.map((feature) => {
          switch (feature?.objectType) {
            case "gene":
              draw_gene({
                id: feature?._id,
                canva: canvas,
                dna: dna,
                leftEndPosition: feature?.leftEndPosition,
                rightEndPosition: feature?.rightEndPosition,
                strand: feature?.strand,
                labelName: feature?.labelName,
                stroke: stroke(feature),
                font: font(feature),
                color: rgb_to_rgbFormat(feature?.objectRGBColor),
                tooltip: feature?.tooltip
              });
              break;
            default:
              break;
          }
          return null;
        });
      } else {
        console.log("Canvas: No DNA information in the data");
      }
    } catch (error) {
      console.error("A problem occurred when drawing the data.", error);
    }
  }
  return <></>;
};

function stroke(feature) {
  return {
    color: rgb_to_rgbFormat(feature?.lineRGBColor),
    width: feature?.lineWidth,
    linecap: feature?.lineType
  };
}
function font(feature) {
  return {
    family: feature?.labelFont,
    size: feature?.labelSize,
    fill: rgb_to_rgbFormat(feature?.labelRGGColor),
    separation: "middle"
  };
}

export default Canvas;

export function DrawCanva(id_drawPlace, id_canvas, width = 100, height = 200) {
  return SVG().addTo(`#${id_drawPlace}`).size(width, height).id(id_canvas);
}
export function rgb_to_rgbFormat(rgb = "0,0,0") {
  return `rgb(${rgb})`;
}
