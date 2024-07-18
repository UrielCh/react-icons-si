import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Orange icon from Simple Icons
 * @module
 */
export function SiOrange(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0Zm3.43 20.572h17.143v-3.429H3.43v3.429Z"}}]})(props);
}
export default SiOrange;
