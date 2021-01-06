import React, { useState, useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";
import { draw_dna } from "./geneticElements/genetic_elements";

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
      dnaFeatures_data.map((feature) => {
        let stroke = {
          color: rgb_to_rgbFormat(feature?.lineRGBColor),
          width: feature?.lineWidth,
          linecap: feature?.lineType
        };
        let font = {
          family: feature?.labelFont,
          size: feature?.labelSize,
          fill: feature?.labelRGGColor,
          separation: "middle"
        };
        switch (feature?.objectType) {
          case "DNA":
          case "dna":
            draw_dna({
              id: feature?._id,
              canva: canvas,
              dnaPosLeft: feature?.leftEndPosition,
              dnaPosRight: feature?.rightEndPosition,
              labelName: feature?.labelName,
              stroke: stroke,
              font: font
            });
            break;
          case "gene":
            break;
          default:
            break;
        }
        return null;
      });
    } catch (error) {
      console.error("A problem occurred when drawing the data.");
    }
  }
  return <></>;
};

export default Canvas;

export function DrawCanva(id_drawPlace, id_canvas, width = 100, height = 200) {
  return SVG().addTo(`#${id_drawPlace}`).size(width, height).id(id_canvas);
}
export function rgb_to_rgbFormat(rgb = "0,0,0") {
  return `rgb(${rgb})`;
}
