const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  await fetch("https://icanhazdadjoke.com",{
    headers:{
      Accept:'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      jokeEl.textContent = data.joke;
    })
    .catch((error) => {
      console.log(error);
    });
  
}
