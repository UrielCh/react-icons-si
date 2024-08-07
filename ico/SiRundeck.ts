import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rundeck icon from Simple Icons
 * @module
 */
export function SiRundeck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.35 4.8 16.325 0H.115L3.14 4.8h16.21zM.115 24h16.21l3.025-4.8H3.14L.115 24zM6.163 9.6h16.21l1.512 2.4-1.512 2.4H6.163L7.675 12 6.163 9.6z"}}]})(props);
}
export default SiRundeck;
