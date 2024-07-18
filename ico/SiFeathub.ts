import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Feathub icon from Simple Icons
 * @module
 */
export function SiFeathub(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.571 0v6.857h6.858V0zM0 8.571v6.858h24V8.57zm8.571 8.572V24h6.858v-6.857z"}}]})(props);
}
export default SiFeathub;
