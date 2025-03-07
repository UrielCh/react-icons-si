import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Beats icon from Simple Icons
 * @module
 */
export function SiBeats(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.625 0v15h8.25a7.5 7.5 0 0 0 0-15zm17.016 11.705c-1.571 3.261-4.91 5.517-8.766 5.517h-8.25V24h11.25a7.5 7.5 0 0 0 5.766-12.295z"}}]})(props);
}
export default SiBeats;
