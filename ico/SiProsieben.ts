import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Prosieben icon from Simple Icons
 * @module
 */
export function SiProsieben(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M.24 0H23.68V6.64H.24M23.76 7.92V24H.24s2.88-7.84 10.48-12.48c7.12-4.4 13.04-3.6 13.04-3.6Z"}}]})(props);
}
export default SiProsieben;
