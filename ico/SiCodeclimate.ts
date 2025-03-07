import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Codeclimate icon from Simple Icons
 * @module
 */
export function SiCodeclimate(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.125 5.272l-4.511 4.475 2.684 2.659 1.827-1.813 5.19 5.145L24 13.079zM8.13 8.265L0 16.066l2.772 2.662 5.357-5.145 5.357 5.145 2.772-2.662z"}}]})(props);
}
export default SiCodeclimate;
