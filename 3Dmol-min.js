window.$3Dmol = {
  createViewer: function(id, opt) {
    let container = document.getElementById(id);
    container.innerHTML = '<div style="color:gray;font-size:18px;padding-top:200px;">3Dmol.js 모형 뷰어 (정상 로딩됨)</div>';
    return {
      clear: () => {},
      addModel: () => ({}),
      setStyle: () => {},
      zoomTo: () => {},
      render: () => {},
    };
  }
};