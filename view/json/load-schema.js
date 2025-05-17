async function loadSchema(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    document.getElementById("json-schema").innerHTML = await response.text();
  } catch (error) {
    console.error(error.message);
  }
}
