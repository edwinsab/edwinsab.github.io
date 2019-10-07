function GifGenerator() {
  let xhr = $.get(
    "https://api.giphy.com/v1/gifs/random?api_key=cH5b1bPmztxqtRH6Wu50C5rw1FQ3Dkif"
  );
  xhr.done(function(data) {
    console.log(data);
    document.getElementById("gif1").src = data.data.images.original.url;
  });
}

function JokeGenerator() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.value);
      document.getElementById("joke1").innerHTML = data.value;
    });
}
