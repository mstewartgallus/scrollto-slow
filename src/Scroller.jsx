import { useCallback, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router";
import './Scroller.css';

const scroll = new Map();

const Scroller = ({children}) => {
    const { pathname } = useLocation();
    const onScroll = useCallback(e => {
        const { target } = e;
        // FIXME throttle
        const { scrollLeft, scrollTop } = target;
        scroll.set(pathname, { scrollLeft, scrollTop });
    }, [pathname]);

    const ref = useRef(null);
    useLayoutEffect(() => {
        const state = scroll.get(pathname) ?? { scrollLeft: 0, scrollTop: 0 };
        const { scrollLeft: left, scrollTop: top } = state;
        ref.current.scrollTo({ left, top, behavior: 'instant' });
    }, [pathname]);
    return <div className="Scroller" onScroll={onScroll} ref={ref}>
               {children}
           </div>;
};

export default Scroller;
