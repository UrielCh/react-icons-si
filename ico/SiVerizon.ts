import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Verizon icon from Simple Icons
 * @module
 */
export function SiVerizon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z"}}]})(props);
}
export default SiVerizon;
