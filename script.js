const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");

output.innerText = "Loading ...";
fetch(`${API_URL}films`)
  .then((res) => res.json())
  .then((res) => {
    output.innerText = getFilms(res);
  });

function getFilms(res) {
  return res
    .sort((a, b) => a.episode_id - b.episode_id)
    .map((_res) => `Episode Id:  ${_res.episode_id} and Title: ${_res.title}`)
    .join("\n");
}
