import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Suckless icon from Simple Icons
 * @module
 */
export function SiSuckless(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 4h24v4H4v2h20v10H0v-4h20v-2H0z"}}]})(props);
}
export default SiSuckless;
