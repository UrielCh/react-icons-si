import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ktor icon from Simple Icons
 * @module
 */
export function SiKtor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 0 0 8l8 8V8h8zm8 8v8H8l8 8 8-8z"}}]})(props);
}
export default SiKtor;
