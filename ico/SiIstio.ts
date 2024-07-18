import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Istio icon from Simple Icons
 * @module
 */
export function SiIstio(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z"}}]})(props);
}
export default SiIstio;
