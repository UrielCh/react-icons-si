import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Spectrum icon from Simple Icons
 * @module
 */
export function SiSpectrum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 10.2A1.8 1.8 0 001.8 12h1.8a8.4 8.4 0 018.4 8.4v1.8a1.8 1.8 0 001.8 1.8h8.4a1.8 1.8 0 001.8-1.8v-1.8C24 9.133 14.867 0 3.6 0H1.8A1.8 1.8 0 000 1.8v8.4z"}}]})(props);
}
export default SiSpectrum;
