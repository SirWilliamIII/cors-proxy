const outputNode = document.getElementById("output");
const TARGET_URL = "https://swapi.dev/api/people/1";
const URL = `http://localhost:8888/${TARGET_URL}`;
fetch(URL)
  .then((response) => response.json())
  .then((data) => (outputNode.textContent = JSON.stringify(data, null, 2)))
  .catch((exception) => {
    outputNode.textContent = exception;
  });
