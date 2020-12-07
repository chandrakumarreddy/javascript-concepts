const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");

output.innerText = "Loading...";

fetch(`${API_URL}films`)
  .then((res) => {
    checkStatus(res).then((_res) => {
      return _res.json().then((resJson) => {
        output.innerText = getFIlms(resJson);
      });
    });
  })
  .catch((error) => {
    console.warn(error);
    output.innerText = ":(";
  });

function checkStatus(res) {
  if (res.ok) return Promise.resolve(res);
  const error = new Error(res.statusText);
  error.status = res.status;
  error.response = res;
  return Promise.reject(error);
}

function getFIlms(res) {
  return res
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((_res) => `${_res.episode_id} ${_res.title}`)
    .join("\n");
}
