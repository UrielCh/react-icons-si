import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Netdata icon from Simple Icons
 * @module
 */
export function SiNetdata(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.764 21.827H9.922L0 2.173h14.084c5.476.01 9.913 4.565 9.916 10.183-.009 5.235-4.14 9.47-9.238 9.47z"}}]})(props);
}
export default SiNetdata;
