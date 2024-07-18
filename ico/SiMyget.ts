import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Myget icon from Simple Icons
 * @module
 */
export function SiMyget(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.96 0 1.1 4.34v14.28L11.9 24l11-5.38V13.8h-3.2v2.87l-7.8 3.83-7.64-3.83V8.02l7.64 3.72 10.8-5.6Zm-.24 3.53L16.02 6l-4.15 2.17-5.22-2.56Z"}}]})(props);
}
export default SiMyget;
