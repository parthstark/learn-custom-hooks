import React, { useEffect } from 'react';
import { useState } from 'react';

const useInterval = (callback, interval) => {
    useEffect(() => {
        const timeout = setTimeout(() => callback(), interval);
        return () => clearTimeout(timeout);
    }, [callback, interval])
}

function IntervalTimer() {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(c => c + 1);
    }, 1000)

    const [toggle, setToggle] = useState(true)
    return (
        <>
            Timer is at {count}
            <button onClick={() => setToggle(x => !x)}>just a button</button>
        </>
    )
}

export default IntervalTimer