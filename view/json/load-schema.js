async function loadSchema(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    let element = document.getElementById("json-schema");
    element.innerHTML = await response.text();
    hljs.addPlugin(new CopyButtonPlugin({
      autohide: false, // Always show the copy button
    }));
    hljs.highlightElement(element);
  } catch (error) {
    console.error(error.message);
  }
}
