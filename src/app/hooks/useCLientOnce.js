import { useRef } from 'react';

// Hook untuk menjalankan fungsi hanya pada client side
export function useClientOnce(fn) {
    const canCall = useRef(true);
    if (typeof window !== 'undefined' && canCall.current) {
        canCall.current = false;
        fn();
    }
}