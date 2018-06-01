'use strict';

var rumpelstiltskin = {
    /**
     * Calculate and return the difference between
     * PerformanceTiming.domComplete and PerformanceTiming.domLoading
     * NOTE: This focuses on the critical path only. Not when the user first
     * made the request for the page to load, but once the DOM has started
     * to be parsed
     * @returns The time in milliseconds it took for the DOM to be complete
     */
    getTimeToDOMComplete: function getTimeToDOMComplete() {
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
    getTimeToDOMInteractive: function getTimeToDOMInteractive() {
        return performance.timing.domInteractive - performance.timing.domLoading;
    },
    /**
     * Calculate and return the difference between
     * PerformanceTiming.responseEnd and PerformanceTiming.fetchStart
     * @returns The time in milliseconds it took for the reponse to complete
     */
    getTimeToResponseComplete: function getTimeToResponseComplete() {
        return performance.timing.responseEnd - performance.timing.fetchStart;
    },
    /**
     * Creates a timestamp in the browser’s performance entry buffer with
     * the provided label.
     * @param {String} label - The name for the mark
     */
    setMark: function setMark(label) {
        if (performance.mark === undefined) {
            console.error('performance.mark is not supported by your user-agant');
            return;
        }

        /* Because a SyntaxError will be thrown if the provided label conflicts
           with a name that already exist in the PerformanceTiming interface,
           we wrap the call in a try/catch */
        try {
            performance.mark(label);
        } catch (error) {
            console.error('Error while setting performance mark: ' + error);
        }
    }
};

window.rumpelstiltskin = rumpelstiltskin;
