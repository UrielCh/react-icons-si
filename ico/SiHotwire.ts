import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hotwire icon from Simple Icons
 * @module
 */
export function SiHotwire(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m16.764 6.917-3.48.81L16.32 0 7.236 11.705l4.334-.854-4.087 7.982 2.364-.532L7.456 24l7.51-8.111-2.77.64 4.568-9.612z"}}]})(props);
}
export default SiHotwire;
