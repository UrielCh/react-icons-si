import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shotcut icon from Simple Icons
 * @module
 */
export function SiShotcut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h6.667v24H0v-.889h5.778V.889H0V0zm7.556 0v24H24v-.889H8.444V.889H24V0H7.556zm1.388 22.611H24V1.389H8.944v21.222zM5.278 1.389H0v21.222h5.278V1.389z"}}]})(props);
}
export default SiShotcut;
