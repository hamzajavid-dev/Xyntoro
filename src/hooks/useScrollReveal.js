import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
                ...options
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [options.threshold, options.rootMargin]);

    return [ref, isVisible];
};

export default useScrollReveal;
