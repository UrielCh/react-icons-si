import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Handshake icon from Simple Icons
 * @module
 */
export function SiHandshake(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.728 0 16.49 24h-4.583l1.87-10.532-4.743 3.893L7.856 24H3.272L7.51 0h4.582L9.806 13.012l4.729-3.862L16.145 0h4.583z"}}]})(props);
}
export default SiHandshake;
