import { useEffect, useState } from 'react';

function ProgressBar({ isActive, isViewed, runNext, duration = 5000 }) {
    const [currentValue, setCurrentValue] = useState(isViewed ? 100 : 0);
    const maxValue = 100;

    useEffect(() => {
        if (!isActive) return; // Only animate if active
        if (currentValue >= maxValue) {
            if (runNext)
                runNext();
            return;
        }
        const step = maxValue / (duration / 50);
        const interval = setInterval(() => {
            setCurrentValue((v) => Math.min(v + step, maxValue));
        }, 50);

        return () => clearInterval(interval);
    }, [isActive, currentValue, duration, runNext]);

    useEffect(() => {
        if (isActive) setCurrentValue(0);
        // if (isViewed && !isActive) setCurrentValue(100);
    }, [isActive, isViewed]);

    return (
        <div className="flex-1 h-1 mx-1 bg-gray-300 rounded overflow-hidden">
            <div
                className={`
                    h-full transition-all duration-75
                    ${isViewed ? 'bg-gray-400' : isActive ? 'bg-blue-500' : 'bg-gray-200'}
                `}
                style={{ width: isActive ? `${currentValue}%` : isViewed ? '100%' : '0%' }}
            />
        </div>
    );
}

export default ProgressBar;