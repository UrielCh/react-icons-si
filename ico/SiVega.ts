import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Vega icon from Simple Icons
 * @module
 */
export function SiVega(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.39 8.693H24l-3.123-6.68ZM6.68 1.987H0L7.098 22.03h.008l2.86-10.73zm14.197-.016-7.098 20.042h-6.68L14.195 1.97"}}]})(props);
}
export default SiVega;
