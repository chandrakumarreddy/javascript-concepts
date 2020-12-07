const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");

spinner.classList.add("spinner");

async function fetchData(type) {
  const res = await fetch(API_URL + type);
  if (res.ok) return res.json();
  return Promise.reject(new Error("error"));
}

Promise.all([fetchData("films"), fetchData("films")])
  .then(([a, b]) => {
    output.innerText = `${a.length} ${b.length}`;
  })
  .finally(() => {
    spinner.remove();
  });
