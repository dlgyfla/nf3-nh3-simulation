
window.$3Dmol = {
  createViewer: function(id, opt) {
    let container = document.getElementById(id);
    container.innerHTML = '<p style="color:gray;">(3Dmol mock viewer - 실제 버전은 외부 로딩 필요)</p>';
    return {
      clear: () => {},
      addModel: () => ({}),
      setStyle: () => {},
      zoomTo: () => {},
      render: () => {},
    };
  }
};
