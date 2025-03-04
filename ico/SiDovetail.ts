import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Dovetail icon from Simple Icons
 * @module
 */
export function SiDovetail(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.75 0 1.5 3l5.25 3v6L12 9V3Zm0 12L1.5 15l5.25 3v6L12 21v-6Zm10.5-6L12 8.966 17.25 12v6l5.25-3V9Z"}}]})(props);
}
export default SiDovetail;
