'use strict';

const rumpelstilskin = {
    /**
     * Calculate and return the difference between
     * PerformanceTiming.responseEnd and PerformanceTiming.fetchStart
     * @returns The time in milliseconds it took for the reponse to complete
     */
    getTimeToResponseComplete: () => {
        return performance.timing.responseEnd - performance.timing.fetchStart;
    }
};

window.rumpelstilskin = rumpelstilskin;
