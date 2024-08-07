import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stockx icon from Simple Icons
 * @module
 */
export function SiStockx(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.74 16.5 22.5 24v-6l-7-6 7-6V0L10.26 10.5v-3L1.5 0v6l7 6-7 6v6l12.24-10.5Z"}}]})(props);
}
export default SiStockx;
