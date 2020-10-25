const SystemUtils = {
  configurePerformance() {
    window.performance.clearMarks = () => {};
    window.performance.clearMeasures = () => {};
    window.performance.mark = () => {};
    window.performance.measure = () => {};
    window.performance.now = Date.now;
  },
};

export default SystemUtils;
