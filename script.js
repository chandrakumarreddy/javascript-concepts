const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

spinner.classList.add("spinner");

fetch(`${API_URL}films`)
  .then(checkStatus)
  .then((res) => {
    return res.json();
  })
  .then((jsonRes) => {
    output.innerText = getFilms(jsonRes);
    return jsonRes;
  })
  .catch((error) => {
    console.warn(error);
    output.innerText = ":(";
  })
  .finally(() => {
    spinner.remove();
  });

function getFilms(res) {
  return res
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((_res) => `${_res.episode_id} ${_res.title}`)
    .join("\n");
}

function checkStatus(res) {
  if (res.ok) return Promise.resolve(res);
  const error = new Error(res.statusText);
  error.status = res.status;
  error.response = res;
  return Promise.reject(error);
}
