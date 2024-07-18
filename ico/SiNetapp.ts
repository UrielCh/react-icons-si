import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Netapp icon from Simple Icons
 * @module
 */
export function SiNetapp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 2v20h9.33V10h5.34v12H24V2Z"}}]})(props);
}
export default SiNetapp;
