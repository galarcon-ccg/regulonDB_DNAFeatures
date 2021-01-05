export function ValidateElements(dnaFeatures_data = []) {
  let features = [];
  dnaFeatures_data.map((feature, inx) => {
    if (feature?._id) {
      if (feature?.objectType) {
        if (feature?.leftEndPosition && feature?.rightEndPosition) {
          if (feature?.leftEndPosition < feature?.rightEndPosition) {
            if (feature?.strand) {
              features.push(feature);
            }
          }
        } else {
          if (feature?.linkedObjectsWhenNoPositions) {
            if (feature?.strand) {
              feature.push(feature);
            }
          }
        }
      }
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
  let dna_left = "0";
  let dna_right = "1000";
  dnaFeatures_data.map((feature, idx) => {
    if (idx === 0) {
      dna_left = feature?.leftEndPosition;
      dna_right = feature?.rightEndPosition;
    } else {
      if (dna_left < feature?.leftEndPosition) {
        dna_left = feature?.leftEndPosition;
      }
      if (dna_right > feature?.rightEndPosition) {
        dna_right = feature?.rightEndPosition;
      }
    }
    return null;
  });
  const dna_default = {
    _id: "DNA-Default",
    labelFont: "",
    labelRGGColor: "",
    labelName: "",
    labelSize: "",
    leftEndPosition: dna_left,
    lineRGBColor: "",
    lineType: "",
    lineWidth: "",
    objectType: "dna",
    objectRGBColor: "",
    rightEndPosition: dna_right,
    strand: "forward",
    tooltip: ""
  };
  dnaFeatures_data.push(dna_default);
  return dnaFeatures_data;
}
