'use strict';

const rumpelstiltskin = {
    /**
     * Collects and returns an Array of performance entries. Entries are
     * either matched by label, entryType, or label and entryType
     * @param {String} [label] - Optional name for the mark
     * @param {String} [entryType] - Optional one of Performance.entryType
     * @returns Array of performance entries matching the specified criteria
     */
    getPerformanceEntries: (label, entryType) => {
        if (label && entryType) {
            return performance.getEntriesByName(label, entryType);
        } else if (entryType) {
            return performance.getEntriesByType(entryType);
        }
        return performance.getEntriesByName(label);
    },
    /**
     * Calculate and return the difference between
     * PerformanceTiming.domComplete and PerformanceTiming.domLoading
     * NOTE: This focuses on the critical path only. Not when the user first
     * made the request for the page to load, but once the DOM has started
     * to be parsed
     * @returns The time in milliseconds it took for the DOM to be complete
     */
    getTimeToDOMComplete: () => {
        return performance.timing.domComplete - performance.timing.domLoading;
    },
    /**
     * Calculate and return the difference between
     * PerformanceTiming.domInteractive and PerformanceTiming.domLoading
     * NOTE: This focuses on the critical path only. Not when the user first
     * made the request for the page to load, but once the DOM has started
     * to be parsed
     * @returns The time in milliseconds it took for the DOM to be interactive
     */
    getTimeToDOMInteractive: () => {
        return (
            performance.timing.domInteractive - performance.timing.domLoading
        );
    },
    /**
     * Calculate and return the difference between
     * PerformanceTiming.responseEnd and PerformanceTiming.fetchStart
     * @returns The time in milliseconds it took for the reponse to complete
     */
    getTimeToResponseComplete: () => {
        return performance.timing.responseEnd - performance.timing.fetchStart;
    },
    /**
     * Creates a timestamp in the browser’s performance entry buffer with
     * the provided label.
     * @param {String} label - The name for the mark
     */
    setMark: label => {
        if (performance.mark === undefined) {
            console.error(
                'performance.mark is not supported by your user-agant'
            );
            return;
        }

        /* Because a SyntaxError will be thrown if the provided label conflicts
           with a name that already exist in the PerformanceTiming interface,
           we wrap the call in a try/catch */
        try {
            performance.mark(label);
        } catch (error) {
            console.error(`Error while setting performance mark: ${error}`);
        }
    }
};

window.rumpelstiltskin = rumpelstiltskin;
