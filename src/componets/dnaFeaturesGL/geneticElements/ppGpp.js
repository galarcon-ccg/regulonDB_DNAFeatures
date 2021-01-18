//DrawPpGpp v 0.10.0
/**
 *falta agregar la funcion para mostrar el corte del elemento
 * Agregar opaciodad
 */
import { stroke_validate, font_validate, color_validate } from "./validation";

export default function DrawPpGpp({
  id,
  canva,
  anchor,
  dna,
  separation = 0,
  leftEndPosition = 0,
  rightEndPosition = 10,
  labelName = "ppGpp",
  strand = "forward",
  color = "#fff",
  opacity = 1,
  stroke,
  font,
  tooltip = ""
}) {
  if (!canva || !dna || !id | (leftEndPosition > rightEndPosition)) {
    return null;
  }
  stroke = stroke_validate(stroke);
  font = font_validate(font);
  color = color_validate(color, "#00FFFF");
  // anchor
  if (anchor) {
    leftEndPosition = anchor.leftEndPosition;
    rightEndPosition = leftEndPosition + 10;
  }
  //atributos
  const dnaX = dna.x,
    size = rightEndPosition - leftEndPosition,
    dnaY = dna.y,
    widthActive = dna.widthActive,
    dnaSize = dna.size,
    x = ((leftEndPosition - dna.leftEndPosition) * widthActive) / dnaSize;
  let sizeP = (size * widthActive) / dnaSize;
  // scale
  let heigthActive = dna.forwardActive;
  if (strand === "reverse") {
    heigthActive = dna.reverseActive;
  }
  const proportion = heigthActive * 0.1;
  //atributos de cuerpo
  let ppGppH = proportion;
  let ppGppW = proportion / 2;

  let posX = x + dnaX;
  let posY = dnaY - separation - ppGppW;
  //Draw
  const ppGpp = canva.ellipse(ppGppH, ppGppW);
  ppGpp.move(posX, posY).stroke(stroke).fill(color);
  const group = canva.group();
  group.add(ppGpp);
  const textP = canva.text("ppGpp");
  textP
    .font({
      family: "Arial",
      size: proportion / 5,
      separation: "middle"
    })
    .move(posX + ppGppH / 6, posY + proportion / 7);
  group.add(textP);
  //DksA effect
  if (labelName === "DksA") {
    const dksA = canva.ellipse(ppGppH, ppGppW);
    dksA
      .move(posX + ppGppH / 1.3, posY)
      .stroke(stroke)
      .fill(color);
    const textD = canva.text("DksA");
    textD
      .font({
        family: "Arial",
        size: proportion / 4,
        separation: "middle"
      })
      .move(posX + ppGppH, posY + proportion / 7);
    group.add(dksA);
    group.add(textD);
  }
  //strand effect
  if (strand === "reverse") {
    posY = dnaY + separation;
    group.move(posX, posY);
  }
  return {
    id: id,
    canva: canva,
    posX: posX,
    posY: posY,
    sizeP: sizeP,
    heigth: ppGppH,
    dna: dna,
    separation: separation,
    leftEndPosition: leftEndPosition,
    rightEndPosition: rightEndPosition,
    labelName: labelName,
    strand: strand,
    color: color,
    opacity: color,
    stroke: stroke
  };
}
