import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cratedb icon from Simple Icons
 * @module
 */
export function SiCratedb(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18 9V3h-6v6H0v6h6v6h6v-6h12V9h-6z"}}]})(props);
}
export default SiCratedb;
