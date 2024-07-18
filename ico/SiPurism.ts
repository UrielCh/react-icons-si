import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Purism icon from Simple Icons
 * @module
 */
export function SiPurism(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z"}}]})(props);
}
export default SiPurism;
