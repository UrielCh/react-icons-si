import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Jamboard icon from Simple Icons
 * @module
 */
export function SiJamboard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.143 0v7.877h7.783V0zm0 8.155v7.784h7.783V8.155zm-.28.005a7.926 7.923 0 0 0-7.789 7.917A7.926 7.923 0 0 0 12 24a7.926 7.923 0 0 0 7.918-7.78h-8.056Z"}}]})(props);
}
export default SiJamboard;
