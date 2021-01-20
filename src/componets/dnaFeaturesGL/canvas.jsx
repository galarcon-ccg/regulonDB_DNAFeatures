import React, { useState, useEffect } from "react";
import { SVG } from "@svgdotjs/svg.js";
import Tooltip from "./tooltip";
import {
  draw_dna,
  draw_gene,
  draw_operon,
  draw_ppGpp,
  draw_promoter,
  draw_riboswitch,
  draw_transnationalA,
  draw_rna,
  draw_site
} from "./geneticElements/genetic_elements";

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
        300
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
        const dna_elements = [];
        //draw elements
        dnaFeatures_data.map((feature) => {
          //console.log(feature?.objectType);
          switch (feature?.objectType) {
            case "gene":
              dna_elements.push(
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "operon":
              dna_elements.push(
                draw_operon({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "ppgpp":
            case "ppGpp":
              dna_elements.push(
                draw_ppGpp({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "promoter":
              dna_elements.push(
                draw_promoter({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "transnational_attenuator":
              dna_elements.push(
                draw_transnationalA({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "riboswitch":
              dna_elements.push(
                draw_riboswitch({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "rna":
              dna_elements.push(
                draw_rna({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            case "tf_binding_site":
              dna_elements.push(
                draw_site({
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
                  tooltip: feature?.tooltip,
                  separation: 0
                })
              );
              break;
            default:
              break;
          }
          return null;
        });
        //draw labels

        //draw tooltip
        return Tooltip({ id_canvas: id_canvas, dna_elements: dna_elements });
      } else {
        console.log("Canvas: No DNA information in the data");
      }
    } catch (error) {
      console.error("A problem occurred when drawing the data.", error);
    }
  }
  return <>canvas error</>;
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
export function rgb_to_rgbFormat(rgb = "175,175,175") {
  return `rgb(${rgb})`;
}
