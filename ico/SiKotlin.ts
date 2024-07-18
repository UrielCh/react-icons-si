import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Kotlin icon from Simple Icons
 * @module
 */
export function SiKotlin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 24H0V0h24L12 12Z"}}]})(props);
}
export default SiKotlin;
