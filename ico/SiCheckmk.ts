import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Checkmk icon from Simple Icons
 * @module
 */
export function SiCheckmk(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.187 8.738v3.985l4.883-3.157v8.217l1.925 1.111 1.926-1.111V9.57l4.882 3.158V8.742l-6.808-4.269-6.808 4.265zM12 0l10.375 5.999V18L12 24 1.625 18.006V6.003L12 0z"}}]})(props);
}
export default SiCheckmk;
