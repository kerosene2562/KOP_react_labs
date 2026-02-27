import { useEffect, useState } from "react";
/**
 * Custom countdown timer hook.
 *
 * The timer starts from the provided initial time (in seconds)
 * and decreases every second until it reaches zero.
 *
 * The timer automatically resets when:
 * - restartKey changes
 * - initialTime changes
 *
 * @function useTimer
 *
 * @param {*} restartKey - Dependency key used to manually restart the timer.
 *                         Changing this value resets the timer.
 * @param {number} [initialTime=60] - Initial countdown time in seconds.
 *
 * @returns {Object} Timer state.
 * @returns {number} returns.time - Current remaining time in seconds.
 * @returns {boolean} returns.isFinished - Indicates whether the timer has reached zero.
 */
export function useTimer(restartKey, initialTime = 60) {
    const [time, setTime] = useState(initialTime);
    const [isFinished, setIsFinished] = useState(false);
    useEffect(() => {
        setTime(initialTime);
        setIsFinished(false);
        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [restartKey, initialTime]);

    return { time, isFinished };
}