export const base = [
  {
    _id: "_base",
    objectType: "gene",
    labelName: "hola",
    leftEndPosition: "100",
    rightEndPosition: "300",
    strand: "forward"
  }
];

export const tnA_data = [
  {
    _id: "tnA-dna",
    objectType: "dna",
    labelName: "",
    leftEndPosition: "100",
    rightEndPosition: "1000",
    strand: "forward"
  },
  {
    _id: "tnA1",
    objectType: "transnational_attenuator",
    labelName: "hola",
    leftEndPosition: "150",
    rightEndPosition: "300",
    strand: "reverse",
    objectRGBColor: "0,255,255"
  },
  {
    _id: "tnA2",
    objectType: "transnational_attenuator",
    labelName: "hola",
    leftEndPosition: "200",
    rightEndPosition: "300",
    strand: "forward",
    objectRGBColor: "0,255,0"
  },
  {
    _id: "tnA3",
    objectType: "transnational_attenuator",
    labelName: "hola",
    leftEndPosition: "500",
    rightEndPosition: "720",
    strand: "forward",
    objectRGBColor: "255,0,0"
  }
];

export const promotor_data = [
  {
    _id: "promo-dna",
    objectType: "dna",
    labelName: "",
    leftEndPosition: "100",
    rightEndPosition: "800",
    strand: "forward"
  },
  {
    _id: "promoA",
    objectType: "promoter",
    labelName: "Promoter",
    leftEndPosition: "500",
    rightEndPosition: "501",
    strand: "reverse",
    lineRGBColor: "0,0,0"
  },
  {
    _id: "promoB",
    objectType: "promoter",
    labelName: "Promoter",
    leftEndPosition: "250",
    rightEndPosition: "251",
    strand: "forward",
    lineRGBColor: "0,0,0"
  }
];

export const ppGpp_data = [
  {
    _id: "ppgpp-dna",
    objectType: "dna",
    labelName: "",
    leftEndPosition: "100",
    rightEndPosition: "800",
    strand: "forward"
  },
  {
    _id: "ppgpp1",
    objectType: "ppGpp",
    labelName: "DksA-ppGpp",
    leftEndPosition: "160",
    rightEndPosition: "260",
    strand: "forward"
  },
  {
    _id: "ppgpp2",
    objectType: "ppGpp",
    labelName: "DksA-ppGpp",
    leftEndPosition: "560",
    rightEndPosition: "660",
    strand: "reverse",
    objectRGBColor: "255,0,0"
  }
];

export const Operon_data = [
  {
    _id: "Operon1",
    objectType: "operon",
    labelName: "hola",
    leftEndPosition: "250",
    rightEndPosition: "800",
    strand: "reverse",
    objectRGBColor: "255,167,89"
  },
  {
    _id: "Operon2",
    objectType: "operon",
    labelName: "hola",
    leftEndPosition: "50",
    rightEndPosition: "500",
    strand: "forward",
    objectRGBColor: "12,255,89"
  },
  {
    _id: "Operon3",
    objectType: "operon",
    labelName: "hola",
    leftEndPosition: "600",
    rightEndPosition: "1000",
    strand: "forward",
    objectRGBColor: "12,167,255"
  }
];

export const DNA_data = [
  {
    _id: "001A",
    labelFont: "",
    labelRGGColor: "",
    labelName: "DNA Line",
    labelSize: "12",
    leftEndPosition: "100",
    lineRGBColor: "255,0,200",
    lineType: "",
    lineWidth: "",
    objectType: "dna",
    objectRGBColor: "255,57,243",
    rightEndPosition: "1000",
    strand: "forward",
    tooltip: "this a dna line..."
  }
];

export const Gene_data = [
  {
    _id: "Gene03",
    labelFont: "",
    labelRGGColor: "",
    labelName: "Gene03",
    labelSize: "",
    leftEndPosition: "150",
    lineRGBColor: "",
    lineType: "",
    lineWidth: "",
    objectType: "gene",
    objectRGBColor: "12,167,89",
    rightEndPosition: "1000",
    strand: "reverse",
    tooltip: "this a gene. 1"
  },
  {
    _id: "Gene01",
    labelFont: "",
    labelRGGColor: "",
    labelName: "Gene01",
    labelSize: "",
    leftEndPosition: "50",
    lineRGBColor: "",
    lineType: "",
    lineWidth: "",
    objectType: "gene",
    objectRGBColor: "",
    rightEndPosition: "1500",
    strand: "reverse",
    tooltip: "this a gene. 1"
  },
  {
    _id: "Gene02",
    labelFont: "",
    labelRGGColor: "",
    labelName: "Gene002",
    labelSize: "",
    leftEndPosition: "500",
    lineRGBColor: "",
    lineType: "",
    lineWidth: "",
    objectType: "gene",
    objectRGBColor: "255,57,243",
    rightEndPosition: "1000",
    strand: "forward",
    tooltip: "<strong>Genome position:</strong><br> 500-1000"
  }
];
