import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Lospec icon from Simple Icons
 * @module
 */
export function SiLospec(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.23 0v24h15.541v-8.4004h-7.1719v3.5996H11.402V0z"}}]})(props);
}
export default SiLospec;
