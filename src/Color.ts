import Color$ from "color";
import convert from "color-convert";
import DeltaE from "delta-e";

export type ColorParam =
  | string
  | Color
  | Color$
  | { r: number, g: number, b: number, alpha?: number }
  | { h: number, s: number, l: number, alpha?: number }
  | { h: number, s: number, v: number, alpha?: number }
  | { c: number, m: number, y: number, k: number, alpha?: number }
  | { c: number, m: number, y: number, k: number, alpha?: number }
  | { h: number, w: number, b: number }
  | { l: number, c: number, h: number }
  | { l: number, a: number, b: number }
  | { h: number, c: number, g: number };

export interface Color {
  alpha(): number;
  alpha(val: number): Color;

  red(): number;
  red(val: number): Color;

  green(): number;
  green(val: number): Color;

  blue(): number;
  blue(val: number): Color;

  hue(): number;
  hue(val: number): Color;

  saturationl(): number;
  saturationl(val: number): Color;

  saturationv(): number;
  saturationv(val: number): Color;

  lightness(): number;
  lightness(val: number): Color;

  whiteness(): number;
  whiteness(val: number): Color;

  blackness(): number;
  blackness(val: number): Color;

  cyan(): number;
  cyan(val: number): Color;

  magenta(): number;
  magenta(val: number): Color;

  yellow(): number;
  yellow(val: number): Color;

  black(): number;
  black(val: number): Color;

  luminosity(): number;
  contrast(other: Color): number;
  isLight(): boolean;
  isDark(): boolean;

  negate(): Color;
  lighten(ratio: number): Color;
  darken(ratio: number): Color;
  saturate(ratio: number): Color;
  desaturate(ratio: number): Color;
  grayscale(): Color;
  whiten(ratio: number): Color;
  blacken(ratio: number): Color;
  fade(ratio: number): Color;
  opaquer(ratio: number): Color;
  rotate(degrees: number): Color;
  mix(other: Color, ratio?: number): Color;

  /**
   * Returns the percent (`[0, 100]`) of difference between two colors
   * using the deltaE algorithm.
   */
  delta(other: Color): number;

  rgb(...rest: number[]): Color;
  hsl(...rest: number[]): Color;
  hsv(...rest: number[]): Color;
  lab(...rest: number[]): Color;
  array(): number[];
  rgbNumber(): number;
  hex(): string;
  hexa(): string;
  string(): string;
}

export interface ColorConstructor {
  // call signature
  (obj?: ColorParam, model?: keyof (typeof convert)): Color;

  // constructor signature
  new(obj?: ColorParam, model?: keyof (typeof convert)): Color;

  rgb(arg1: number, arg2: number, arg3: number, alpha?: number): Color;
  rgb(array: number[]): Color;

  hsl(arg1: number, arg2: number, arg3: number): Color;

  hsv(arg1: number, arg2: number, arg3: number): Color;
  hsv(array: number[]): Color;

  cmyk(arg1: number, arg2: number, arg3: number, arg4: number, alpha?: number): Color;

  hwb(arg1: number, arg2: number, arg3: number): Color;

  lch(arg1: number, arg2: number, arg3: number): Color;  

  lab(arg1: number, arg2: number, arg3: number): Color;

  hcg(arg1: number, arg2: number, arg3: number): Color;

  ansi16(arg1: number, alpha?: number): Color;

  apple(arg1: number, arg2: number, arg3: number): Color;
  apple(array: number[]): Color;
}

export const Color: ColorConstructor = function Color(this: any, argument: any): any {
  if (!new.target) {
    return new (Color as any)(argument);
  }
  (this as any)._color = argument instanceof Color ? (argument as any)._color : argument instanceof Color$ ? argument : Color$(argument);
} as any;

Color.rgb = (...rest: any[]) => {
  return new Color(Color$.rgb(...rest));
};

Color.hsl = (...rest: any[]) => {
  return new Color(Color$.hsl(...rest));
};

Color.hsv = (...rest: any[]) => {
  return new Color(Color$.hsv(...rest));
};

Color.cmyk = (...rest: any[]) => {
  return new Color(Color$.cmyk(...rest));
};

Color.hwb = (...rest: any[]) => {
  return new Color(Color$.hwb(...rest));
};

Color.lch = (...rest: any[]) => {
  return new Color(Color$.lch(...rest));
};

Color.lab = (...rest: any[]) => {
  return new Color(Color$.lab(...rest));
};

Color.hcg = (...rest: any[]) => {
  return new Color(Color$.hcg(...rest));
};

Color.ansi16 = (...rest: any[]) => {
  return new Color(Color$.ansi16(...rest));
};

Color.apple = (...rest: any[]) => {
  return new Color(Color$.apple(...rest));
};

// # Color.prototype

Color.prototype.alpha = function(val: any = undefined): any {
  const r = this._color.alpha(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.red = function(val: any = undefined): any {
  const r = this._color.red(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.green = function(val: any = undefined): any {
  const r = this._color.green(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.blue = function(val: any = undefined): any {
  const r = this._color.blue(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.hue = function(val: any = undefined): any {
  const r = this._color.hue(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.saturationl = function(val: any = undefined): any {
  const r = this._color.saturationl(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.saturationv = function(val: any = undefined): any {
  const r = this._color.saturationv(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.lightness = function(val: any = undefined): any {
  const r = this._color.lightness(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.whiteness = function(val: any = undefined): any {
  const r = this._color.whiteness(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.blackness = function(val: any = undefined): any {
  const r = this._color.blackness(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.cyan = function(val: any = undefined): any {
  const r = this._color.cyan(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.magenta = function(val: any = undefined): any {
  const r = this._color.magenta(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.yellow = function(val: any = undefined): any {
  const r = this._color.yellow(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.black = function(val: any = undefined): any {
  const r = this._color.black(val);
  if (typeof val === "undefined") return r;
  return this;
};

Color.prototype.luminosity = function() {
  return this._color.luminosity();
};

Color.prototype.contrast = function(other: any) {
  return this._color.contrast(other._color);
};

Color.prototype.isLight = function() {
  return this._color.isLight();
};

Color.prototype.isDark = function() {
  return this._color.isDark();
};

Color.prototype.negate = function() {
  return Color((this._color as Color$).negate());
};

Color.prototype.lighten = function(ratio: number) {
  return Color((this._color as Color$).lighten(ratio));
};

Color.prototype.darken = function(ratio: number) {
  return Color((this._color as Color$).darken(ratio));
};

Color.prototype.saturate = function(ratio: number) {
  return Color((this._color as Color$).saturate(ratio));
};

Color.prototype.desaturate = function(ratio: number) {
  return Color((this._color as Color$).desaturate(ratio));
};

Color.prototype.grayscale = function() {
  return Color((this._color as Color$).grayscale());
};

Color.prototype.whiten = function(ratio: number) {
  return Color((this._color as Color$).whiten(ratio));
};

Color.prototype.blacken = function(ratio: number) {
  return Color((this._color as Color$).blacken(ratio));
};

Color.prototype.fade = function(ratio: number) {
  return Color((this._color as Color$).fade(ratio));
};

Color.prototype.opaquer = function(ratio: number) {
  return Color((this._color as Color$).opaquer(ratio));
};

Color.prototype.rotate = function(degrees: number) {
  return Color((this._color as Color$).rotate(degrees));
};

Color.prototype.mix = function(other: Color, ratio: any) {
  return Color((this._color as Color$).mix((other as any)._color as Color$, ratio));
};

Color.prototype.delta = function(other: Color) {
  const aRGB = this.rgb().array() as [number, number, number],
    bRGB = other.rgb().array() as [number, number, number];
  const aLAB = convert.rgb.lab(aRGB),
    bLAB = convert.rgb.lab(bRGB);
  return DeltaE.getDeltaE00(
    { L: aLAB[0], A: aLAB[1], B: aLAB[2] },
    { L: bLAB[0], A: bLAB[1], B: bLAB[2] },
  );
};

Color.prototype.rgb = function(...rest: number[]) {
  return Color((this._color as Color$).rgb(...rest));
};

Color.prototype.hsl = function(...rest: number[]) {
  return Color((this._color as Color$).hsl(...rest));
};

Color.prototype.hsv = function(...rest: number[]) {
  return Color((this._color as Color$).hsv(...rest));
};

Color.prototype.lab = function(...rest: number[]) {
  return Color((this._color as Color$).lab(...rest));
};

Color.prototype.array = function() {
  return (this._color as Color$).array();
};

Color.prototype.rgbNumber = function() {
  return (this._color as Color$).rgbNumber();
};

Color.prototype.hex = function() {
  return (this._color as Color$).hex();
};

Color.prototype.hexa = function() {
  return (this._color as Color$).hexa();
};

Color.prototype.string = function() {
  return (this._color as Color$).string();
};

Color.prototype.toString = function() {
  return (this._color as Color$).string();
}