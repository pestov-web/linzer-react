import React from 'react';
import { scrollTo } from '../utils/scrollTo';

const ScrollToButton = ({ toId, toRef, duration, children, onClick, isModal }) => {
    const handleMenuClick = () => {
        scrollTo({ id: toId, ref: toRef, duration });
        if (onClick) {
            onClick();
        }
    };

    return (
        <button className={isModal ? 'scroll-to__button_place_modal' : 'scroll-to__button'} onClick={handleMenuClick}>
            {children}
        </button>
    );
};

export default ScrollToButton;
