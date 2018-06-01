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
    }
};

window.rumpelstiltskin = rumpelstiltskin;
