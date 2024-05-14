import { useEffect, RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: () => void
) => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => handleClick(event);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};

export default useOutsideClick;
