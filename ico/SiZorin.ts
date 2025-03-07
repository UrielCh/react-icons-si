import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Zorin icon from Simple Icons
 * @module
 */
export function SiZorin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 18.944L5.995 22.4h12.01L20 18.944H4zM24 12l-2.013 3.488H9.216l12.771-6.976L24 12zM0 12l2.013-3.488h12.771L2.013 15.488 0 12zm4-6.944L5.995 1.6h12.01L20 5.056H4z"}}]})(props);
}
export default SiZorin;
