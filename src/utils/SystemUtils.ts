const SystemUtils = {
  configurePerformance: function () {
    window.performance.clearMarks = () => {};
    window.performance.measure = () => {};
    window.performance.clearMeasures = () => {};
    window.performance.mark = () => {};
    window.performance.now = Date.now;
  },
};

export default SystemUtils;
