import { Color } from "@svgdotjs/svg.js";

export function stroke_validate(stroke) {
  const strokeDefault = { color: "#000", width: 1, linecap: "round" };
  stroke.color = color_validate(stroke?.color);
  if (!stroke?.width) {
    stroke.width = strokeDefault.width;
  }
  if (!stroke?.linecap) {
    stroke.linecap = strokeDefault.linecap;
  }
  return stroke;
}

export function font_validate(font) {
  const fontDefult = {
    family: "Arial",
    size: 12,
    separation: "middle",
    fill: "#000"
  };
  font.fill = color_validate(font?.fill);
  if (!font?.family) {
    font.family = fontDefult.family;
  }
  if (!font?.size) {
    font.size = fontDefult.size;
  }
  if (!font?.separation) {
    font.separation = fontDefult.separation;
  }
  return font;
}

export function color_validate(color) {
  try {
    color = new Color(color);
  } catch (e) {
    color = new Color("#000");
  }
  return color;
}
