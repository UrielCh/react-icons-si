import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pleroma icon from Simple Icons
 * @module
 */
export function SiPleroma(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.36 0A1.868 1.868 0 004.49 1.868V24h5.964V0zm7.113 0v12h4.168a1.868 1.868 0 001.868-1.868V0zm0 18.036V24h4.168a1.868 1.868 0 001.868-1.868v-4.096Z"}}]})(props);
}
export default SiPleroma;
