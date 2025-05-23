import { useRef, MutableRefObject } from 'react';
import { Props } from './ResizeDetector';
interface FunctionProps extends Props {
    targetRef?: ReturnType<typeof useRef>;
}
declare function useResizeDetector<T = any>(props?: FunctionProps): {
    height?: number | undefined;
    width?: number | undefined;
    ref: MutableRefObject<T>;
};
export default useResizeDetector;
