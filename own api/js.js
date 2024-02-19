const first = document.getElementById("first");
const btn = document.getElementById("btn");

btn.addEventListener("click", generate);

generate();

async function generate() {
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
  const res = await fetch('https://icanhazdadjoke.com',config);
  const data = await res.json();
  console.log(data);
  first.innerHTML = data.joke
}