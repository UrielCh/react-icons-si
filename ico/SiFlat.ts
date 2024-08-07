import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flat icon from Simple Icons
 * @module
 */
export function SiFlat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.5455 17.4545v3.2728C6.5455 22.5348 5.0802 24 3.2727 24S0 22.5348 0 20.7273c0-1.8075 1.4652-3.2728 3.2727-3.2728Zm8.7272-8.7272V12c0 1.8075-1.4652 3.2727-3.2727 3.2727H5.4545c-1.8074 0-3.2727-1.4652-3.2727-3.2727 0-1.8075 1.4653-3.2727 3.2727-3.2727zM24 0v3.2727c0 1.8075-1.4652 3.2728-3.2727 3.2728H7.6363c-1.8074 0-3.2727-1.4653-3.2727-3.2728S5.829 0 7.6364 0Z"}}]})(props);
}
export default SiFlat;
