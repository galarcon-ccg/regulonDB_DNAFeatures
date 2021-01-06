export function ValidateElements(dnaFeatures_data = []) {
  let features = [];
  dnaFeatures_data.map((feature, inx) => {
    if (feature?._id) {
      if (feature?.objectType) {
        if (feature?.leftEndPosition && feature?.rightEndPosition) {
          let leftEndPosition = toInt(feature?.leftEndPosition);
          let rightEndPosition = toInt(feature?.rightEndPosition);
          if (leftEndPosition < rightEndPosition) {
            feature.leftEndPosition = leftEndPosition;
            feature.rightEndPosition = rightEndPosition;
            if (feature?.strand) {
              features.push(feature);
            } else {
              eMes("strand", inx);
            }
          } else {
            console.warn(
              inx,
              "positions error",
              feature?.leftEndPosition,
              feature?.rightEndPosition
            );
          }
        } else {
          if (feature?.linkedObjectsWhenNoPositions) {
            if (feature?.strand) {
              feature.push(feature);
            } else {
              eMes("strand", inx);
            }
          } else {
            eMes("posLeft and PosRigth", inx);
          }
        }
      } else {
        eMes("object Type", inx);
      }
    } else {
      eMes("id", inx);
    }
    return null;
  });
  if (features.length > 0) {
    return features;
  }
  return;
}

export function ValidateDNA(dnaFeatures_data = []) {
  const dna = dnaFeatures_data.find((feature) => feature?.objectType === "dna");
  if (dna) {
    return dnaFeatures_data;
  }
  let dna_left = undefined;
  let dna_right = undefined;
  dnaFeatures_data.map((feature, idx) => {
    if (feature?.leftEndPosition && feature?.rightEndPosition) {
      let leftEndPosition = toInt(feature?.leftEndPosition);
      let rightEndPosition = toInt(feature?.rightEndPosition);
      let plusLeft = feature?.leftEndPosition.indexOf("+");
      let plusRight = feature?.rightEndPosition.indexOf("+");
      if (plusLeft === -1 && !dna_left) {
        dna_left = leftEndPosition;
      }
      if (plusRight === -1 && !dna_right) {
        dna_right = rightEndPosition;
      }
      if (dna_left > leftEndPosition && plusLeft === -1) {
        dna_left = leftEndPosition;
      }
      if (dna_right < rightEndPosition && plusRight === -1) {
        dna_right = rightEndPosition;
      }
    }
    return null;
  });
  const dna_default = {
    _id: "DNA-Default",
    labelFont: "",
    labelRGGColor: "",
    labelName: "",
    labelSize: "12",
    leftEndPosition: dna_left.toString(),
    lineRGBColor: "0,0,0",
    lineType: "",
    lineWidth: "",
    objectType: "dna",
    objectRGBColor: "",
    rightEndPosition: dna_right.toString(),
    strand: "forward",
    tooltip: ""
  };
  dnaFeatures_data.push(dna_default);
  return dnaFeatures_data;
}

function eMes(prop, inx) {
  console.warn(
    `The element in the index: ${inx} is not valid, problem with its property ${prop}`
  );
}

function toInt(str = "") {
  str.toString().replace("+", "");
  return parseInt(str, 10);
}
