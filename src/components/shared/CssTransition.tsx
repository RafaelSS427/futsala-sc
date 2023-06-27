import { FC, PropsWithChildren, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

interface Props extends PropsWithChildren {
    inProp: boolean
}

// This component is not being used
export const CssTransition:FC<Props> = ({ inProp, children }) => {
    const nodeRef = useRef(null);
    return (
        <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} classNames="fadeIn">
            <div ref={nodeRef}>
                { children }
            </div>
        </CSSTransition>
    )
}