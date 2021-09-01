import React from "react";
import { useLayer, useHover, Arrow } from "react-laag";

export default function Tooltipss({ children, content }) {
    const [isOver, hoverProps] = useHover();

    const {
        triggerProps,
        layerProps,
        arrowProps,
        renderLayer
    } = useLayer({
        isOpen: isOver
    });

    return (
        <>
            <div {...triggerProps} {...hoverProps}>
                {children}
            </div>
            {isOver &&
                renderLayer(
                    <div className="tooltip" {...layerProps}>
                        {content}
                        <Arrow {...arrowProps} />
                    </div>
                )}
        </>
    );
}
