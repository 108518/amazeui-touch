const isStudio = window.studioEditing;
let bodyElement = document.body;

if (isStudio) {
  const isEngine = document.getElementById("engine_browser");
  if (isEngine && isEngine.contentWindow.document.body) {
    bodyElement = isEngine.contentWindow.document.body
  }
}

export default bodyElement;
