import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Kong icon from Simple Icons
 * @module
 */
export function SiKong(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{"role":"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.88 18.96h4.405l2.286 2.876-.393.979h-5.69l.139-.979-1.341-2.117.594-.759Zm3.152-12.632 2.36-.004L24 18.97l-.824 3.845h-4.547l.283-1.083L9 9.912l2.032-3.584Zm4.17-5.144 4.932 3.876-.632.651.855 1.191v1.273l-2.458 2.004-4.135-4.884h-2.407l.969-1.777 2.876-2.334ZM4.852 13.597l3.44-2.989 4.565 5.494-1.296 2.012h-4.21l-2.912 3.822-.665.879H0v-4.689l3.517-4.529h1.335Z"}}]})(props);
}
export default SiKong;
