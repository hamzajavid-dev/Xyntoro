import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ScrollReveal = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    className = ''
}) => {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    const getAnimationStyles = () => {
        const baseStyles = {
            transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
            transitionDelay: `${delay}ms`,
        };

        if (!isVisible) {
            switch (animation) {
                case 'fade-up':
                    return { ...baseStyles, opacity: 0, transform: 'translateY(40px)' };
                case 'fade-down':
                    return { ...baseStyles, opacity: 0, transform: 'translateY(-40px)' };
                case 'fade-left':
                    return { ...baseStyles, opacity: 0, transform: 'translateX(40px)' };
                case 'fade-right':
                    return { ...baseStyles, opacity: 0, transform: 'translateX(-40px)' };
                case 'zoom-in':
                    return { ...baseStyles, opacity: 0, transform: 'scale(0.9)' };
                case 'fade':
                default:
                    return { ...baseStyles, opacity: 0 };
            }
        }

        return { ...baseStyles, opacity: 1, transform: 'translateY(0) translateX(0) scale(1)' };
    };

    return (
        <div ref={ref} style={getAnimationStyles()} className={className}>
            {children}
        </div>
    );
};

export default ScrollReveal;
