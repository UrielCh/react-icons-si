import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Telegraph icon from Simple Icons
 * @module
 */
export function SiTelegraph(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0v24h24V0H0zm6 6h12v3h-4.5v9h-3V9H6V6Z"}}]})(props);
}
export default SiTelegraph;
