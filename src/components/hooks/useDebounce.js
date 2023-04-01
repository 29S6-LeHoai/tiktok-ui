import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handleDebounce = setTimeout(() => {
            return setDebounceValue(value);
        }, delay);
        //clear setTiemout khi component bị unmao
        return () => clearTimeout(handleDebounce);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
