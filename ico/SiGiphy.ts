import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Giphy icon from Simple Icons
 * @module
 */
export function SiGiphy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.666 0v24h18.668V8.666l-2.668 2.668v10H5.334V2.668H10L12.666 0zm10.668 0v8h8V5.334h-2.668V2.668H16V0"}}]})(props);
}
export default SiGiphy;
