import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Steamdeck icon from Simple Icons
 * @module
 */
export function SiSteamdeck(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.999 0v4.309c4.242 0 7.694 3.45 7.694 7.691s-3.452 7.691-7.694 7.691V24c6.617 0 12-5.383 12-12s-5.383-12-12-12Zm0 6.011c-3.313 0-6 2.687-5.998 6a5.999 5.999 0 1 0 5.998-6z"}}]})(props);
}
export default SiSteamdeck;
