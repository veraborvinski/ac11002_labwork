window.onload = function(){
document.getElementById('btn').addEventListener("click", main);}



function createNode(element) {
return document.createElement(element); // Create the type of element you pass in
}

function append(parent, el) {
return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function main(){
document.getElementById('film').innerHTML = "";
const row = document.getElementById('film');
var filmSearch = document.getElementById("search").value;
  const url = 'https://www.omdbapi.com/?s=' + filmSearch + '&apikey=caadaf4e';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {

      let film = data.Search;
      return film.map(function(film) {
        let col = createNode('div');
        col.setAttribute('class','col-3');
        let card = createNode('div');
        card.setAttribute('class','card');
        let img = createNode('img');
        img.setAttribute('class','card-img-top');
        let cardBody = createNode('div');
        cardBody.setAttribute('class','card-body');
        let h5 = createNode('h5');
        h5.setAttribute('class','card-title');
        let p = createNode('p');
        p.setAttribute('class','card-text');
        let info = createNode('a');
        info.setAttribute('class', 'btn btn-primary')


        img.src = film.Poster;
        h5.innerHTML = film.Title;
        p.innerHTML = film.Year;
        info.innerHTML = "More Information";

        info.href = "singleMovie.html?" + film.imdbID;



        append(cardBody, h5);
        append(cardBody, p);
        append(cardBody, info);
        append(card, img);
        append(card, cardBody);
        append(col, card);
        append(row, col);
    })
})
    .catch(function(error) {
    console.log(error);
  })
};
