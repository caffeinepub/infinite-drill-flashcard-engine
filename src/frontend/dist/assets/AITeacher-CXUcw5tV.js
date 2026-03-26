import { r as reactExports, j as jsxRuntimeExports } from "./index-Byw4S5DT.js";
import { u as useComposedRefs, B as Button } from "./button-DkpHnvfj.js";
import { P as Primitive, I as Input } from "./index-LxvqYrMU.js";
import { b as useDirection, c as createContextScope, P as Presence, a as composeEventHandlers, d as useCallbackRef, u as useLayoutEffect2 } from "./index-DkUX1CtS.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-qxRjawbb.js";
import { m as motion } from "./proxy-4Idy-Vh5.js";
import { X } from "./x-BeYwIi-X.js";
import { S as Send } from "./send-Dj9HNBpk.js";
import { G as GraduationCap } from "./graduation-cap-Cvj5XJOb.js";
import { A as AnimatePresence } from "./index-BPOfjV_G.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode);
function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function useStateMachine(initialState, machine) {
  return reactExports.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext] = createContextScope(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeScrollArea,
      type = "hover",
      dir,
      scrollHideDelay = 600,
      ...scrollAreaProps
    } = props;
    const [scrollArea, setScrollArea] = reactExports.useState(null);
    const [viewport, setViewport] = reactExports.useState(null);
    const [content, setContent] = reactExports.useState(null);
    const [scrollbarX, setScrollbarX] = reactExports.useState(null);
    const [scrollbarY, setScrollbarY] = reactExports.useState(null);
    const [cornerWidth, setCornerWidth] = reactExports.useState(0);
    const [cornerHeight, setCornerHeight] = reactExports.useState(0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = reactExports.useState(false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = reactExports.useState(false);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
    const direction = useDirection(dir);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaProvider,
      {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
              ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
              ...props.style
            }
          }
        )
      }
    );
  }
);
ScrollArea$1.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
          },
          nonce
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...viewportProps,
          ref: composedRefs,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
            ...props.style
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: context.onContentChange, style: { minWidth: "100%", display: "table" }, children })
        }
      )
    ] });
  }
);
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    reactExports.useEffect(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = reactExports.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const scrollArea = context.scrollArea;
    let hideTimer = 0;
    if (scrollArea) {
      const handlePointerEnter = () => {
        window.clearTimeout(hideTimer);
        setVisible(true);
      };
      const handlePointerLeave = () => {
        hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
      };
      scrollArea.addEventListener("pointerenter", handlePointerEnter);
      scrollArea.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        window.clearTimeout(hideTimer);
        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
      };
    }
  }, [context.scrollArea, context.scrollHideDelay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarAuto,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarScroll = reactExports.forwardRef((props, forwardedRef) => {
  const { forceMount, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const isHorizontal = props.orientation === "horizontal";
  const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
  const [state, send] = useStateMachine("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  reactExports.useEffect(() => {
    if (state === "idle") {
      const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
      return () => window.clearTimeout(hideTimer);
    }
  }, [state, context.scrollHideDelay, send]);
  reactExports.useEffect(() => {
    const viewport = context.viewport;
    const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
    if (viewport) {
      let prevScrollPos = viewport[scrollDirection];
      const handleScroll = () => {
        const scrollPos = viewport[scrollDirection];
        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
        if (hasScrollInDirectionChanged) {
          send("SCROLL");
          debounceScrollEnd();
        }
        prevScrollPos = scrollPos;
      };
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
  }, [context.viewport, isHorizontal, send, debounceScrollEnd]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || state !== "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": state === "hidden" ? "hidden" : "visible",
      ...scrollbarProps,
      ref: forwardedRef,
      onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
      onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
    }
  ) });
});
var ScrollAreaScrollbarAuto = reactExports.forwardRef((props, forwardedRef) => {
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const { forceMount, ...scrollbarProps } = props;
  const [visible, setVisible] = reactExports.useState(false);
  const isHorizontal = props.orientation === "horizontal";
  const handleResize = useDebounceCallback(() => {
    if (context.viewport) {
      const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
      const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
      setVisible(isHorizontal ? isOverflowX : isOverflowY);
    }
  }, 10);
  useResizeObserver(context.viewport, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || visible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarVisible,
    {
      "data-state": visible ? "visible" : "hidden",
      ...scrollbarProps,
      ref: forwardedRef
    }
  ) });
});
var ScrollAreaScrollbarVisible = reactExports.forwardRef((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const thumbRef = reactExports.useRef(null);
  const pointerOffsetRef = reactExports.useRef(0);
  const [sizes, setSizes] = reactExports.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => thumbRef.current = thumb,
    onThumbPointerUp: () => pointerOffsetRef.current = 0,
    onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
  };
  function getScrollPosition(pointerPos, dir) {
    return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
  }
  if (orientation === "horizontal") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollLeft = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) context.viewport.scrollTop = scrollPos;
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
        }
      }
    );
  }
  return null;
});
var ScrollAreaScrollbarX = reactExports.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = reactExports.useState();
  const ref = reactExports.useRef(null);
  const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
  reactExports.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "horizontal",
      ...scrollbarProps,
      ref: composeRefs,
      sizes,
      style: {
        bottom: 0,
        left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollLeft + event.deltaX;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollWidth,
            viewport: context.viewport.offsetWidth,
            scrollbar: {
              size: ref.current.clientWidth,
              paddingStart: toInt(computedStyle.paddingLeft),
              paddingEnd: toInt(computedStyle.paddingRight)
            }
          });
        }
      }
    }
  );
});
var ScrollAreaScrollbarY = reactExports.forwardRef((props, forwardedRef) => {
  const { sizes, onSizesChange, ...scrollbarProps } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
  const [computedStyle, setComputedStyle] = reactExports.useState();
  const ref = reactExports.useRef(null);
  const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
  reactExports.useEffect(() => {
    if (ref.current) setComputedStyle(getComputedStyle(ref.current));
  }, [ref]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbarImpl,
    {
      "data-orientation": "vertical",
      ...scrollbarProps,
      ref: composeRefs,
      sizes,
      style: {
        top: 0,
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
        ...props.style
      },
      onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
      onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
      onWheelScroll: (event, maxScrollPos) => {
        if (context.viewport) {
          const scrollPos = context.viewport.scrollTop + event.deltaY;
          props.onWheelScroll(scrollPos);
          if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
            event.preventDefault();
          }
        }
      },
      onResize: () => {
        if (ref.current && context.viewport && computedStyle) {
          onSizesChange({
            content: context.viewport.scrollHeight,
            viewport: context.viewport.offsetHeight,
            scrollbar: {
              size: ref.current.clientHeight,
              paddingStart: toInt(computedStyle.paddingTop),
              paddingEnd: toInt(computedStyle.paddingBottom)
            }
          });
        }
      }
    }
  );
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeScrollArea,
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
  const [scrollbar, setScrollbar] = reactExports.useState(null);
  const composeRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
  const rectRef = reactExports.useRef(null);
  const prevWebkitUserSelectRef = reactExports.useRef("");
  const viewport = context.viewport;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebounceCallback(onResize, 10);
  function handleDragScroll(event) {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  }
  reactExports.useEffect(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar == null ? void 0 : scrollbar.contains(element);
      if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  reactExports.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollbarProvider,
    {
      scope: __scopeScrollArea,
      scrollbar,
      hasThumb,
      onThumbChange: useCallbackRef(onThumbChange),
      onThumbPointerUp: useCallbackRef(onThumbPointerUp),
      onThumbPositionChange: handleThumbPositionChange,
      onThumbPointerDown: useCallbackRef(onThumbPointerDown),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          ...scrollbarProps,
          ref: composeRefs,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              if (context.viewport) context.viewport.style.scrollBehavior = "auto";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            if (context.viewport) context.viewport.style.scrollBehavior = "";
            rectRef.current = null;
          })
        }
      )
    }
  );
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || scrollbarContext.hasThumb, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaThumbImpl, { ref: forwardedRef, ...thumbProps }) });
  }
);
var ScrollAreaThumbImpl = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = useComposedRefs(
      forwardedRef,
      (node) => scrollbarContext.onThumbChange(node)
    );
    const removeUnlinkedScrollListenerRef = reactExports.useRef(void 0);
    const debounceScrollEnd = useDebounceCallback(() => {
      if (removeUnlinkedScrollListenerRef.current) {
        removeUnlinkedScrollListenerRef.current();
        removeUnlinkedScrollListenerRef.current = void 0;
      }
    }, 100);
    reactExports.useEffect(() => {
      const viewport = scrollAreaContext.viewport;
      if (viewport) {
        const handleScroll = () => {
          debounceScrollEnd();
          if (!removeUnlinkedScrollListenerRef.current) {
            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
            removeUnlinkedScrollListenerRef.current = listener;
            onThumbPositionChange();
          }
        };
        onThumbPositionChange();
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
    }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...style
        },
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
          const thumb = event.target;
          const thumbRect = thumb.getBoundingClientRect();
          const x = event.clientX - thumbRect.left;
          const y = event.clientY - thumbRect.top;
          scrollbarContext.onThumbPointerDown({ x, y });
        }),
        onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
      }
    );
  }
);
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = reactExports.forwardRef(
  (props, forwardedRef) => {
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollAreaCornerImpl, { ...props, ref: forwardedRef }) : null;
  }
);
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeScrollArea, ...cornerProps } = props;
  const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
  const [width, setWidth] = reactExports.useState(0);
  const [height, setHeight] = reactExports.useState(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(context.scrollbarX, () => {
    var _a;
    const height2 = ((_a = context.scrollbarX) == null ? void 0 : _a.offsetHeight) || 0;
    context.onCornerHeightChange(height2);
    setHeight(height2);
  });
  useResizeObserver(context.scrollbarY, () => {
    var _a;
    const width2 = ((_a = context.scrollbarY) == null ? void 0 : _a.offsetWidth) || 0;
    context.onCornerWidthChange(width2);
    setWidth(width2);
  });
  return hasSize ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      ...cornerProps,
      ref: forwardedRef,
      style: {
        width,
        height,
        position: "absolute",
        right: context.dir === "ltr" ? 0 : void 0,
        left: context.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...props.style
      }
    }
  ) : null;
});
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) return output[0];
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = () => {
}) => {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) handler();
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = reactExports.useRef(0);
  reactExports.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return reactExports.useCallback(() => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(handleCallback, delay);
  }, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  useLayoutEffect2(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [element, handleResize]);
}
var Root = ScrollArea$1;
var Viewport = ScrollAreaViewport;
var Corner = ScrollAreaCorner;
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
const aiResponses = [
  {
    keywords: [
      "photosynthesis",
      "chlorophyll",
      "plants make food",
      "light reaction",
      "dark reaction"
    ],
    subject: "Biology",
    answer: "**Photosynthesis** is the process by which plants convert sunlight, water (H₂O), and carbon dioxide (CO₂) into glucose (sugar) and oxygen.\n\n📐 **Formula:** 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\n🌱 **Where it happens:** In chloroplasts, specifically using chlorophyll (the green pigment).\n\n**Two stages:**\n1. **Light Reaction** (in thylakoids): Uses sunlight to split water, releasing O₂ and producing ATP + NADPH\n2. **Dark Reaction/Calvin Cycle** (in stroma): Uses ATP to convert CO₂ into glucose\n\nThis is covered in Class 10 Science (Life Processes) and Class 11 Biology!"
  },
  {
    keywords: [
      "newton",
      "newton's law",
      "laws of motion",
      "inertia",
      "force and motion",
      "f=ma"
    ],
    subject: "Physics",
    answer: "**Newton's Three Laws of Motion** are fundamental to physics!\n\n⚡ **1st Law (Inertia):** An object stays at rest or in motion unless acted upon by an external force. *Example:* When a bus brakes, you jerk forward — your body continues moving due to inertia.\n\n⚡ **2nd Law:** Force = Mass × Acceleration (F = ma). A heavier object needs more force to accelerate by the same amount.\n\n⚡ **3rd Law:** For every action, there's an equal and opposite reaction. *Example:* A rocket shoots gas backward, gas pushes rocket forward!\n\n📌 **Conservation of Momentum:** When no external force acts, total momentum (p = mv) stays constant.\n\nCovered in Class 9 Science, Chapter 9!"
  },
  {
    keywords: [
      "cell",
      "cell structure",
      "organelle",
      "mitochondria",
      "nucleus",
      "cell unit of life"
    ],
    subject: "Biology",
    answer: "**The Cell** is the basic structural and functional unit of all living organisms!\n\n🔬 **Cell Theory:**\n• All living things are made of cells\n• Cells come from pre-existing cells\n• Cell is the basic unit of life\n\n**Prokaryotic vs Eukaryotic:**\n• Prokaryote (bacteria): No membrane-bound nucleus, simpler\n• Eukaryote (plants/animals): True nucleus + organelles\n\n**Key Organelles:**\n• 🧠 **Nucleus** — control center, contains DNA\n• ⚡ **Mitochondria** — 'powerhouse,' produces ATP energy\n• 🌿 **Chloroplast** — photosynthesis (plants only)\n• 📦 **Golgi Apparatus** — packaging and transport\n• 💧 **Lysosome** — 'suicidal bags,' digests waste\n\nSee Class 11 Biology, Chapter 8!"
  },
  {
    keywords: [
      "mitosis",
      "cell division",
      "meiosis",
      "chromosome",
      "cell cycle"
    ],
    subject: "Biology",
    answer: "**Cell Division** is how organisms grow and reproduce!\n\n🔄 **Mitosis (for growth):**\n• Produces 2 identical daughter cells\n• Used for growth, repair, and asexual reproduction\n• Stages: Prophase → Metaphase → Anaphase → Telophase (PMAT)\n• DNA amount stays the same (2n → 2n)\n\n🔄 **Meiosis (for reproduction):**\n• Produces 4 genetically diverse cells with half the chromosomes\n• Used for sexual reproduction (makes eggs and sperm)\n• Two rounds of division: Meiosis I (separation of chromosome pairs) and Meiosis II (like mitosis)\n• Chromosome number halved (2n → n)\n\n🧬 **Why important?** Meiosis creates genetic diversity — crucial for evolution!"
  },
  {
    keywords: [
      "quadratic",
      "discriminant",
      "quadratic equation",
      "quadratic formula",
      "roots of equation"
    ],
    subject: "Mathematics",
    answer: "**Quadratic Equations** are polynomials of degree 2: **ax² + bx + c = 0**\n\n📐 **Quadratic Formula:**\nx = **[-b ± √(b² - 4ac)] / 2a**\n\n🔍 **Discriminant (D = b² - 4ac):**\n• D > 0: Two distinct real roots\n• D = 0: Two equal real roots (repeated)\n• D < 0: No real roots (complex numbers)\n\n**Vieta's Formulas:**\n• Sum of roots (α + β) = **-b/a**\n• Product of roots (α × β) = **c/a**\n\n**Methods to solve:**\n1. Factorization (split middle term)\n2. Completing the square\n3. Quadratic formula (always works!)\n\n📝 Example: x² - 5x + 6 = 0 → (x-2)(x-3) = 0 → x = 2 or x = 3"
  },
  {
    keywords: [
      "french revolution",
      "bastille",
      "revolution france",
      "three estates",
      "reign of terror"
    ],
    subject: "Social Science",
    answer: "**The French Revolution (1789-1799)** transformed the world!\n\n📜 **Causes:**\n• Financial bankruptcy of France\n• Social inequality (Third Estate paid all taxes)\n• Enlightenment ideas (Rousseau, Voltaire)\n• Food shortages and bread prices\n\n📅 **Key Events:**\n• 1789: Storming of the Bastille (July 14) — symbol of tyranny's fall\n• 1789: Declaration of Rights of Man\n• 1793-94: Reign of Terror under Robespierre\n• 1799: Napoleon's coup ends the Revolution\n\n⚖️ **Three Estates:**\n• 1st: Clergy (no taxes)\n• 2nd: Nobility (no taxes)\n• 3rd: Everyone else (97% of population, paid ALL taxes!)\n\n💡 **Slogan:** *Liberté, Égalité, Fraternité* (Liberty, Equality, Fraternity)\n\nClass 9 Social Science, Chapter 1!"
  },
  {
    keywords: [
      "acid",
      "base",
      "acid base",
      "ph scale",
      "neutralization",
      "salt"
    ],
    subject: "Chemistry",
    answer: "**Acids, Bases, and Salts** — fundamental chemistry!\n\n🧪 **Acids:**\n• Produce H⁺ ions in water\n• pH < 7, sour taste, turn blue litmus red\n• Examples: HCl (hydrochloric), H₂SO₄ (sulfuric), CH₃COOH (vinegar)\n\n🧪 **Bases/Alkalis:**\n• Produce OH⁻ ions in water\n• pH > 7, bitter/slippery, turn red litmus blue\n• Examples: NaOH (caustic soda), Ca(OH)₂ (lime water)\n\n⚗️ **Neutralization:**\nAcid + Base → Salt + Water\nHCl + NaOH → NaCl + H₂O\n\n📊 **pH Scale:** 0-14\n• 0: Strongest acid\n• 7: Neutral (pure water)\n• 14: Strongest base\n\nCovered in Class 7 and Class 10 Science!"
  },
  {
    keywords: [
      "democracy",
      "democratic",
      "parliament",
      "constitution",
      "government",
      "rights"
    ],
    subject: "Social Science",
    answer: "**Democracy** is a system where power belongs to the people!\n\n🏛️ **Types of Democracy:**\n• **Direct Democracy:** Citizens vote on every issue directly (ancient Greece)\n• **Representative/Indirect Democracy:** Citizens elect representatives (most modern countries)\n• India is a **representative democracy** with a parliamentary system\n\n📜 **Key Features:**\n• Free and fair elections\n• Rule of law\n• Protection of fundamental rights\n• Independent judiciary\n• Freedom of speech and press\n\n🇮🇳 **India's Democracy:**\n• World's largest democracy\n• Parliamentary system (Lok Sabha + Rajya Sabha)\n• Constitution adopted January 26, 1950\n• Preamble declares India 'Democratic, Sovereign, Socialist, Secular, Republic'\n\nExplored in Class 9 & 10 Social Science (Political Science)!"
  },
  {
    keywords: [
      "atom",
      "atomic structure",
      "proton",
      "neutron",
      "electron",
      "bohr",
      "shell"
    ],
    subject: "Chemistry",
    answer: "**Atomic Structure** — the building blocks of everything!\n\n⚛️ **Parts of an Atom:**\n• **Proton:** Positive charge, in nucleus, mass ≈ 1 amu\n• **Neutron:** No charge, in nucleus, mass ≈ 1 amu  \n• **Electron:** Negative charge, in orbits/shells, mass ≈ 0\n\n🔵 **Bohr's Model:**\n• Electrons orbit in fixed energy levels (shells)\n• Shells: K(2), L(8), M(18), N(32)\n• Valence electrons (outermost) determine chemical properties\n\n📊 **Important Numbers:**\n• **Atomic Number (Z)** = number of protons\n• **Mass Number (A)** = protons + neutrons\n• **Isotopes:** Same Z, different A (e.g., C-12 and C-14)\n\nCovered in Class 9 Science Chapter 4!"
  },
  {
    keywords: [
      "linear equation",
      "simultaneous equation",
      "pair of linear",
      "two variable"
    ],
    subject: "Mathematics",
    answer: "**Pair of Linear Equations** in two variables!\n\n📐 **Standard Form:** a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0\n\n**3 Methods to Solve:**\n1. **Graphical:** Plot both lines; intersection = solution\n2. **Substitution:** Solve one equation for x, substitute in other\n3. **Elimination:** Multiply to make coefficients equal, add/subtract\n\n🔍 **Types of Solutions:**\n• **Unique solution:** Lines intersect at one point (a₁/a₂ ≠ b₁/b₂)\n• **No solution:** Parallel lines (a₁/a₂ = b₁/b₂ ≠ c₁/c₂)\n• **Infinite solutions:** Same line (a₁/a₂ = b₁/b₂ = c₁/c₂)\n\n💡 **Real-life example:** If 2 pens + 3 notebooks = ₹50 and 3 pens + 2 notebooks = ₹60, find individual prices!\n\nClass 10 Mathematics, Chapter 3!"
  },
  {
    keywords: [
      "magnetic field",
      "magnet",
      "electromagnetism",
      "electromagnet",
      "electric motor"
    ],
    subject: "Physics",
    answer: "**Magnetism and Electromagnetism** — fascinating physics!\n\n🧲 **Magnetic Field:**\n• Region around a magnet where it can exert force\n• Field lines go from North to South pole outside the magnet\n• Earth itself is a giant magnet!\n\n⚡ **Electromagnets:**\n• Electricity flowing through a coil creates a magnetic field\n• Strength depends on: current strength, number of turns, iron core\n\n🔄 **Key Applications:**\n• **Electric Motor:** Uses magnetic force to convert electrical energy to mechanical motion\n• **Generator:** Converts mechanical energy to electrical (opposite of motor)\n• **Transformer:** Changes voltage levels using electromagnetic induction\n• **Loudspeakers, MRI machines, cranes**\n\n📚 **Fleming's Rules:**\n• Left Hand Rule → Motor (force direction)\n• Right Hand Rule → Generator (current direction)\n\nClass 10 Science Chapter 13!"
  },
  {
    keywords: [
      "evolution",
      "natural selection",
      "darwin",
      "adaptation",
      "species"
    ],
    subject: "Biology",
    answer: "**Evolution** — how life changes over time!\n\n🌍 **Darwin's Theory of Natural Selection:**\n1. Organisms vary in their traits\n2. Traits can be inherited\n3. More offspring are born than can survive (competition)\n4. Organisms with advantageous traits survive better ('survival of the fittest')\n5. Beneficial traits accumulate over generations → new species\n\n🦕 **Evidence for Evolution:**\n• **Fossil record:** Preserved remains show gradual change\n• **Homologous organs:** Similar structures in different species (human arm, whale flipper, bat wing)\n• **Vestigial organs:** Reduced organs with no current function (human tailbone)\n• **DNA similarities** between related species\n\n🦋 **Famous Examples:**\n• Darwin's finches: Different beak shapes for different food sources\n• Peppered moths: Color change during industrial revolution\n\nClass 10 Science Chapter 9!"
  },
  {
    keywords: [
      "heredity",
      "genetics",
      "mendel",
      "gene",
      "chromosome",
      "dominant",
      "recessive"
    ],
    subject: "Biology",
    answer: "**Heredity and Genetics** — how traits are passed on!\n\n🧬 **Mendel's Laws:**\n• **Law of Dominance:** In a cross, dominant trait masks recessive trait\n• **Law of Segregation:** Allele pairs separate during gamete formation\n• **Law of Independent Assortment:** Genes for different traits assort independently\n\n📊 **Key Terms:**\n• **Gene:** Segment of DNA that codes for a trait\n• **Allele:** Different versions of the same gene\n• **Dominant (T):** Expressed even with one copy\n• **Recessive (t):** Only expressed with two copies (tt)\n• **Genotype:** Genetic makeup (TT, Tt, tt)\n• **Phenotype:** Physical appearance (Tall/Short)\n\n🔬 **Punnett Square:** Used to predict offspring ratios!\nCross Tt × Tt → 25% TT : 50% Tt : 25% tt\n\nClass 10 Science Chapter 9 + Class 12 Biology!"
  },
  {
    keywords: [
      "respiratory system",
      "breathing",
      "lungs",
      "oxygen",
      "carbon dioxide",
      "alveoli"
    ],
    subject: "Biology",
    answer: "**The Respiratory System** — how we breathe!\n\n💨 **Pathway of Air:**\nNose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → **Alveoli**\n\n🫁 **Alveoli (Air sacs):**\n• Tiny balloon-like sacs in the lungs\n• Very thin walls (one cell thick) for easy gas exchange\n• 300 million in each lung — huge surface area!\n• O₂ diffuses into blood; CO₂ diffuses out\n\n⚗️ **Gas Exchange:**\n• Blood entering lungs: high CO₂, low O₂\n• Blood leaving lungs: high O₂, low CO₂\n\n🔄 **Types of Respiration:**\n• **Aerobic:** C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP (efficient!)\n• **Anaerobic:** Glucose → Lactic acid + 2 ATP (in muscles during exercise)\n\nClass 10 Science Chapter 6 (Life Processes)!"
  },
  {
    keywords: [
      "periodic table",
      "elements",
      "period",
      "group",
      "valence electron",
      "atomic number"
    ],
    subject: "Chemistry",
    answer: "**The Periodic Table** — chemistry's master organizer!\n\n📊 **Organization:**\n• **Periods (rows):** 7 horizontal rows; same number of electron shells\n• **Groups (columns):** 18 vertical columns; same number of valence electrons\n• Elements arranged in order of increasing atomic number\n\n🔑 **Key Groups:**\n• **Group 1 (Alkali Metals):** Li, Na, K — very reactive, 1 valence electron\n• **Group 17 (Halogens):** F, Cl, Br — highly reactive non-metals\n• **Group 18 (Noble Gases):** He, Ne, Ar — inert, complete outer shells\n• **Transition Metals:** Iron, copper, gold — in middle\n\n📈 **Periodic Trends (across period, left to right):**\n• Atomic size decreases\n• Ionization energy increases\n• Electronegativity increases\n\nDeveloped by Dmitri Mendeleev (1869)! Class 10 Science Chapter 5!"
  },
  {
    keywords: [
      "trigonometry",
      "sin",
      "cos",
      "tan",
      "angle",
      "pythagoras",
      "sine cosine"
    ],
    subject: "Mathematics",
    answer: "**Trigonometry** — the mathematics of triangles and angles!\n\n📐 **SOH-CAH-TOA (remember this!):**\n• **sin θ** = Opposite/Hypotenuse\n• **cos θ** = Adjacent/Hypotenuse\n• **tan θ** = Opposite/Adjacent\n\n🔢 **Important Values:**\n| θ | 0° | 30° | 45° | 60° | 90° |\n|---|-----|------|------|------|-----|\n| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |\n| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |\n| tan | 0 | 1/√3 | 1 | √3 | ∞ |\n\n🔑 **Key Identities:**\n• sin²θ + cos²θ = 1\n• 1 + tan²θ = sec²θ\n• 1 + cot²θ = cosec²θ\n\nClass 10 Mathematics Chapter 8!"
  },
  {
    keywords: [
      "carbon",
      "carbon compound",
      "organic chemistry",
      "hydrocarbon",
      "catenation"
    ],
    subject: "Chemistry",
    answer: "**Carbon Compounds** — the basis of organic chemistry!\n\n⚛️ **Why Carbon is Special:**\n• **Catenation:** Can bond with other carbon atoms forming chains, rings, branches\n• **Tetravalency:** Forms 4 bonds (can bond with H, O, N, Cl, etc.)\n• Result: Millions of organic compounds!\n\n🧪 **Homologous Series:**\n• **Alkanes:** CₙH₂ₙ₊₂ (single bonds — CH₄, C₂H₆, C₃H₈)\n• **Alkenes:** CₙH₂ₙ (one double bond — C₂H₄, C₃H₆)\n• **Alkynes:** CₙH₂ₙ₋₂ (one triple bond — C₂H₂)\n\n🔬 **Functional Groups:**\n• -OH: Alcohol (Ethanol)\n• -COOH: Carboxylic acid (Acetic acid/Vinegar)\n• -CHO: Aldehyde\n\n⚗️ **IUPAC Naming:**\n1C=Meth, 2C=Eth, 3C=Prop, 4C=But, 5C=Pent\n\nClass 10 Science Chapter 4!"
  },
  {
    keywords: [
      "light",
      "reflection",
      "refraction",
      "lens",
      "mirror",
      "optics",
      "speed of light"
    ],
    subject: "Physics",
    answer: "**Light, Reflection & Refraction** — the physics of vision!\n\n💡 **Laws of Reflection:**\n• Angle of incidence (i) = Angle of reflection (r)\n• Incident ray, normal, and reflected ray are in the same plane\n\n🔭 **Mirrors:**\n• **Concave:** Converging; used in torches, satellite dishes, solar cookers\n• **Convex:** Diverging; used in rear-view mirrors (wide field of view)\n• **Mirror formula:** 1/f = 1/v + 1/u\n\n🌊 **Refraction:**\n• Light bends when moving between media (different speeds)\n• **Snell's Law:** n₁ sin θ₁ = n₂ sin θ₂\n• **Refractive index (n)** = speed of light in vacuum / speed in medium\n\n👁️ **Eye Defects:**\n• **Myopia** (near-sighted): Corrected with CONCAVE lens\n• **Hypermetropia** (far-sighted): Corrected with CONVEX lens\n\nClass 10 Science Chapter 10!"
  },
  {
    keywords: [
      "ecosystem",
      "food chain",
      "food web",
      "trophic level",
      "biodiversity",
      "ecology"
    ],
    subject: "Biology",
    answer: "**Ecosystems and Ecology** — how nature is interconnected!\n\n🌿 **Ecosystem Components:**\n• **Producers:** Plants (make food through photosynthesis)\n• **Primary Consumers:** Herbivores (eat plants: rabbits, deer)\n• **Secondary Consumers:** Eat primary consumers (frogs, small fish)\n• **Tertiary Consumers:** Top predators (eagles, tigers)\n• **Decomposers:** Break down dead matter (bacteria, fungi)\n\n🔗 **Food Chain Example:**\nGrass → Grasshopper → Frog → Snake → Eagle\n\n⚡ **10% Rule:** Only 10% of energy transfers to next trophic level\n\n🌍 **Biodiversity:**\n• Number of species in an area\n• **Hotspots:** Areas with high biodiversity (India has 4!)\n• **Threats:** Habitat destruction, climate change, pollution\n\n♻️ **Biogeochemical Cycles:** Carbon, nitrogen, oxygen, water cycles maintain balance\n\nClass 10 & 12 Biology!"
  },
  {
    keywords: [
      "nationalism",
      "nation",
      "colonialism",
      "independence",
      "freedom movement"
    ],
    subject: "Social Science",
    answer: "**Nationalism and Independence Movements**!\n\n🌍 **What is Nationalism?**\nThe belief that people sharing common identity (language, culture, history) should have their own self-governing nation-state.\n\n🇮🇳 **India's Freedom Movement:**\n• 1857: First War of Independence\n• 1885: Indian National Congress founded\n• 1919: Rowlatt Act → Jallianwala Bagh massacre\n• 1920-22: Non-Cooperation Movement (Gandhi)\n• 1930: Dandi March (Salt Satyagraha)\n• 1942: Quit India Movement\n• **1947: Independence!**\n\n🌐 **Nationalism in Europe:**\n• 1830s-1870s: German and Italian unification\n• Bismarck's 'blood and iron' policy for Germany\n• Garibaldi and Cavour unified Italy\n\n💡 **Key Thinkers:** Rousseau (popular sovereignty), Mazzini (Italian nationalism), Tilak, Gandhi, Nehru (Indian nationalism)\n\nClass 10 Social Science Chapter 1!"
  },
  {
    keywords: [
      "water cycle",
      "hydrological cycle",
      "evaporation water",
      "precipitation",
      "rain"
    ],
    subject: "Science",
    answer: "**The Water Cycle (Hydrological Cycle)** — Earth's endless water journey!\n\n💧 **Steps of the Water Cycle:**\n1. **Evaporation:** Sun heats water bodies → water vapor rises\n2. **Transpiration:** Plants release water vapor through leaves\n3. **Condensation:** Water vapor cools at high altitudes → forms clouds (water droplets)\n4. **Precipitation:** Water falls as rain, snow, hail, or sleet\n5. **Collection:** Water collects in rivers, lakes, groundwater\n6. Cycle begins again!\n\n🌊 **Importance:**\n• Distributes freshwater across Earth\n• Regulates temperature\n• Maintains all life on Earth\n• ~97% of Earth's water is in oceans (salty)\n• Only ~3% is freshwater!\n\n🌡️ **Fun Fact:** The water you drink may have been inside a dinosaur millions of years ago!\n\nCovered in Class 6-8 Science!"
  },
  {
    keywords: [
      "reproduction",
      "sexual reproduction",
      "asexual reproduction",
      "fertilization"
    ],
    subject: "Biology",
    answer: "**Reproduction** — how living things multiply!\n\n🔬 **Asexual Reproduction (one parent):**\n• **Binary Fission:** Amoeba, bacteria split in two\n• **Budding:** Hydra, yeast form buds that separate\n• **Spore Formation:** Fungi, ferns produce spores\n• **Vegetative Propagation:** Plants from stems/roots/leaves (potato, rose cuttings)\n• No genetic variation!\n\n🌸 **Sexual Reproduction (two parents):**\n• Requires male (sperm/pollen) and female (egg/ovule) gametes\n• **Fertilization:** fusion of gametes\n• Creates genetic diversity!\n\n🌺 **Flowering Plants:**\n• Pollination (transfer of pollen)\n• **Double Fertilization** — unique to flowering plants\n• One sperm + egg → embryo; other sperm + polar nuclei → endosperm\n\n👶 **Human Reproduction:**\nFertilization → Zygote → Embryo → Fetus → Baby (9 months gestation)\n\nClass 10 Science Chapter 8 + Class 12 Biology!"
  },
  {
    keywords: [
      "electricity",
      "current",
      "voltage",
      "resistance",
      "ohm",
      "circuit",
      "electric"
    ],
    subject: "Physics",
    answer: "**Electricity** — the foundation of modern technology!\n\n⚡ **Ohm's Law:**\n**V = IR** (Voltage = Current × Resistance)\n• V = Voltage in Volts (V)\n• I = Current in Amperes (A)\n• R = Resistance in Ohms (Ω)\n\n🔋 **Key Concepts:**\n• **Current (I):** Flow of electric charge (electrons)\n• **Voltage (V):** Electric pressure driving current\n• **Resistance (R):** Opposition to current flow\n\n🔌 **Circuits:**\n• **Series:** Resistors in sequence; same current, voltages add (Rtotal = R₁ + R₂)\n• **Parallel:** Resistors side by side; same voltage, currents add (1/Rtotal = 1/R₁ + 1/R₂)\n\n💡 **Power = V × I = I²R = V²/R** (in Watts)\n\n**Kilowatt-hour (kWh):** Unit of electrical energy used in billing\n1 kWh = 1000 W used for 1 hour\n\nClass 10 Science Chapter 12!"
  },
  {
    keywords: [
      "climate change",
      "global warming",
      "greenhouse effect",
      "carbon dioxide",
      "ozone"
    ],
    subject: "Science",
    answer: "**Climate Change and Environmental Issues** — a critical topic!\n\n🌡️ **Greenhouse Effect:**\n• Greenhouse gases (CO₂, CH₄, N₂O, water vapor) trap heat in atmosphere\n• Natural greenhouse effect keeps Earth warm enough for life\n• **Enhanced greenhouse effect** from human activities is causing global warming\n\n🏭 **Causes of Climate Change:**\n• Burning fossil fuels (coal, oil, gas) → CO₂ emissions\n• Deforestation → less CO₂ absorbed\n• Agriculture → CH₄ from cattle, rice paddies\n• Industrial processes\n\n🌊 **Effects:**\n• Rising temperatures and sea levels\n• Melting glaciers and ice caps\n• Extreme weather events\n• Threat to biodiversity\n\n🍃 **Ozone Depletion:**\n• Ozone layer (O₃) protects Earth from harmful UV radiation\n• CFCs (from old refrigerants) destroy ozone → 'ozone hole'\n\nClass 8 & 10 Science!"
  },
  {
    keywords: [
      "harappan",
      "indus valley",
      "mohenjo daro",
      "ancient india",
      "civilization"
    ],
    subject: "Social Science",
    answer: "**The Harappan/Indus Valley Civilisation** (2600-1900 BCE)!\n\n🏛️ **Key Facts:**\n• One of the world's FIRST urban civilisations\n• Extended over 1.5 million km² (Pakistan + northwest India)\n• Contemporary with ancient Egypt and Mesopotamia!\n\n🏙️ **Urban Planning (Advanced!):**\n• Grid-pattern streets (planned cities!)\n• Covered drainage systems\n• Standardized baked brick buildings\n• Great Bath at Mohenjo-daro (ritual cleansing?)\n• Separate citadel (upper town) and lower town\n\n💼 **Economy:**\n• Agriculture: wheat, barley, cotton\n• Crafts: pottery, beads, metalwork\n• Long-distance trade with Mesopotamia (seals found there!)\n\n🔍 **Mystery:**\n• Harappan script is STILL undeciphered!\n• Decline around 1900 BCE — climate change? River shifts?\n\nClass 12 History Chapter 1!"
  },
  {
    keywords: [
      "probability",
      "chance",
      "sample space",
      "event",
      "random experiment"
    ],
    subject: "Mathematics",
    answer: "**Probability** — the mathematics of chance!\n\n🎲 **Basic Formula:**\nP(Event) = Favorable outcomes / Total outcomes\n\n📊 **Key Terms:**\n• **Random Experiment:** Outcome cannot be predicted with certainty (tossing a coin)\n• **Sample Space (S):** Set of all possible outcomes\n• **Event:** A subset of the sample space\n\n🎯 **Important Rules:**\n• 0 ≤ P(E) ≤ 1 (probability is always between 0 and 1)\n• P(Impossible event) = 0\n• P(Sure event) = 1\n• P(E) + P(not E) = 1\n\n🎪 **Examples:**\n• P(getting head in coin toss) = 1/2\n• P(getting 6 on die) = 1/6\n• P(getting even number on die) = 3/6 = 1/2\n\n🃏 **Cards (52-card deck):**\n• 4 suits: Hearts ♥ Diamonds ♦ Clubs ♣ Spades ♠\n• 13 cards each suit: A, 2-10, J, Q, K\n\nClass 10 Mathematics Chapter 15!"
  },
  {
    keywords: [
      "digestive",
      "digestion",
      "stomach",
      "intestine",
      "enzyme",
      "nutrition human"
    ],
    subject: "Biology",
    answer: "**Human Digestive System** — turning food into fuel!\n\n🍎 **Journey of Food:**\n1. **Mouth:** Teeth chew; saliva (amylase enzyme) starts starch digestion\n2. **Esophagus:** Food moves down by peristalsis (muscular waves)\n3. **Stomach:** HCl creates acidic environment; pepsin digests proteins; churning mixes food\n4. **Small Intestine:** Main digestion site!\n   • Pancreatic juice: amylase, lipase, proteases\n   • Bile (from liver): emulsifies fats\n   • Intestinal enzymes complete digestion\n   • **Villi** absorb nutrients into blood\n5. **Large Intestine:** Absorbs water; forms feces\n6. **Anus:** Egestion\n\n⚗️ **Digestive Enzymes:**\n• Amylase: Starch → Glucose\n• Pepsin/Protease: Protein → Amino acids\n• Lipase: Fat → Fatty acids + Glycerol\n\nClass 10 Science (Life Processes)!"
  }
];
function findAIResponse(question) {
  const questionLower = question.toLowerCase();
  for (const response of aiResponses) {
    for (const keyword of response.keywords) {
      if (questionLower.includes(keyword.toLowerCase())) {
        return response;
      }
    }
  }
  return null;
}
const fallbackResponse = "That's a great question! 🤔 This topic is covered in your NCERT textbook. Try searching for it in the **NCERT Browse** section above, or explore related topics in our Quiz and Flashcard sections. If you need detailed help, ask your teacher for more guidance.\n\nTip: Try asking about specific topics like *'photosynthesis'*, *'Newton's laws'*, *'quadratic equations'*, *'French Revolution'*, or *'cell structure'*!";
function renderMarkdown(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>").replace(/• /g, "• ");
}
function AITeacher() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [question, setQuestion] = reactExports.useState("");
  const [messages, setMessages] = reactExports.useState([
    {
      id: "welcome",
      role: "assistant",
      content: "👋 Hi! I'm your **AI Teacher**! Ask me anything from your NCERT syllabus.\n\nTry asking about: *photosynthesis*, *Newton's laws*, *quadratic equations*, *French Revolution*, *cell structure*, or any other NCERT topic!",
      timestamp: /* @__PURE__ */ new Date()
    }
  ]);
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const scrollAreaRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);
  reactExports.useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        var _a;
        return (_a = inputRef.current) == null ? void 0 : _a.focus();
      }, 100);
    }
  }, [isOpen]);
  const handleAsk = async () => {
    if (!question.trim() || isTyping) return;
    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: question.trim(),
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 1200));
    const response = findAIResponse(question.trim());
    const answer = response ? response.answer : fallbackResponse;
    const assistantMessage = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: answer,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void handleAsk();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 },
        transition: { duration: 0.2 },
        "data-ocid": "ai_teacher.panel",
        className: "fixed bottom-20 right-4 z-50 w-80 md:w-96 rounded-2xl overflow-hidden border border-border/50 ai-teacher-panel",
        style: {
          background: "oklch(0.13 0.03 272 / 0.98)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border-b border-border/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 16, className: "text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-display font-bold text-foreground", children: "AI Teacher" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-neon-green flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-neon-green inline-block pulse-dot" }),
                  "Online — Ask anything NCERT"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setIsOpen(false),
                "data-ocid": "ai_teacher.close_button",
                className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all",
                "aria-label": "Close AI Teacher",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollArea, { ref: scrollAreaRef, className: "h-80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3", children: [
            messages.map((msg) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`,
                children: [
                  msg.role === "assistant" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 13, className: "text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${msg.role === "user" ? "bg-neon-purple/20 border border-neon-purple/30 text-foreground rounded-tr-sm" : "bg-card/80 border border-border/30 text-foreground rounded-tl-sm"}`,
                      dangerouslySetInnerHTML: {
                        __html: renderMarkdown(msg.content)
                      }
                    }
                  )
                ]
              },
              msg.id
            )),
            isTyping && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-7 h-7 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { size: 13, className: "text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card/80 border border-border/30 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: "w-1.5 h-1.5 rounded-full bg-muted-foreground",
                  animate: { y: [0, -5, 0] },
                  transition: {
                    duration: 0.6,
                    delay: i * 0.15,
                    repeat: Number.POSITIVE_INFINITY
                  }
                },
                i
              )) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 border-t border-border/30 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                ref: inputRef,
                value: question,
                onChange: (e) => setQuestion(e.target.value),
                onKeyDown: handleKeyDown,
                placeholder: "Ask about any NCERT topic...",
                "data-ocid": "ai_teacher.input",
                className: "h-9 text-xs bg-background/50 border-border/40 focus:border-neon-purple/40",
                disabled: isTyping
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: () => void handleAsk(),
                disabled: !question.trim() || isTyping,
                "data-ocid": "ai_teacher.submit_button",
                className: "h-9 w-9 p-0 bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:opacity-90 shrink-0",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 })
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        "data-ocid": "ai_teacher.open_button",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        className: "fixed bottom-4 right-4 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-neon-purple glow-purple text-white",
        "aria-label": "Open AI Teacher",
        title: "Ask AI Teacher",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { rotate: -90, opacity: 0 },
              animate: { rotate: 0, opacity: 1 },
              exit: { rotate: 90, opacity: 0 },
              transition: { duration: 0.15 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 })
            },
            "close"
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { rotate: 90, opacity: 0 },
              animate: { rotate: 0, opacity: 1 },
              exit: { rotate: -90, opacity: 0 },
              transition: { duration: 0.15 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 24 })
            },
            "open"
          ) }),
          !isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 rounded-2xl border-2 border-neon-purple/50",
              animate: { scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] },
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY }
            }
          )
        ]
      }
    )
  ] });
}
export {
  AITeacher
};
