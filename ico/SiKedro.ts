import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Kedro icon from Simple Icons
 * @module
 */
export function SiKedro(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12 0 12 12-12 12L0 12 12 0z"}}]})(props);
}
export default SiKedro;
