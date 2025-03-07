import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Radar icon from Simple Icons
 * @module
 */
export function SiRadar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0L2.197 23.975 12 19.952 21.803 24z"}}]})(props);
}
export default SiRadar;
