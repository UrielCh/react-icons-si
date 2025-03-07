import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Airfrance icon from Simple Icons
 * @module
 */
export function SiAirfrance(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.776 3.9L5.184 16.332C4.051 17.969 2.208 19.548 0 19.721v.379h9.552c2.544 0 4.397-1.656 5.616-3.48L24 3.9Z"}}]})(props);
}
export default SiAirfrance;
