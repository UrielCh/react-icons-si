import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Suno icon from Simple Icons
 * @module
 */
export function SiSuno(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.5 0C20.642 0 24 5.373 24 12h-9c0 6.627-3.358 12-7.5 12C3.358 24 0 18.627 0 12h9c0-6.627 3.358-12 7.5-12Z"}}]})(props);
}
export default SiSuno;
