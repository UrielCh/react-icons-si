import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Viblo icon from Simple Icons
 * @module
 */
export function SiViblo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.569 19.68h2.904L21.621.018 18.705 0l-4.428 10.668H9.705L5.295 0H2.379l8.19 19.68zm-7.02 1.854h16.908V24H3.549v-2.466z"}}]})(props);
}
export default SiViblo;
