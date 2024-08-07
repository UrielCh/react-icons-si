import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Micropython icon from Simple Icons
 * @module
 */
export function SiMicropython(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h11.509v18.737h.982V0H24v24h-5.263V5.263h-.983V24H6.246V5.263l-.983.035V24H0zm22.246 19.509h-1.404v2.386h1.404z"}}]})(props);
}
export default SiMicropython;
