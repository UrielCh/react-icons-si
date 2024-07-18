import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Vercel icon from Simple Icons
 * @module
 */
export function SiVercel(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 22.525H0l12-21.05 12 21.05z"}}]})(props);
}
export default SiVercel;
