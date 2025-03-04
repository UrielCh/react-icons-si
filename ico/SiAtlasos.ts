import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Atlasos icon from Simple Icons
 * @module
 */
export function SiAtlasos(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m12 1.608 12 20.785H0l2.537-4.394h13.852L12 10.396l-1.844 3.193H5.082z"}}]})(props);
}
export default SiAtlasos;
