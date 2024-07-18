import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Inoreader icon from Simple Icons
 * @module
 */
export function SiInoreader(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m3.6 4.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2"}}]})(props);
}
export default SiInoreader;
