var app = function(){
  const url = "https://s3-eu-west-1.amazonaws.com/brewdogapi/beers.json";
  makeRequest(url, requestComplete);
};

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
};

const requestComplete = function() {
  if (this.status !== 200) return;
  const beers = JSON.parse(this.response);
  // populateList(beers);
  populationDropDown(beers);
  const select = document.querySelector('select');
  select.addEventListener('change', handleSelectChange);
};

// const populateList = function(beers) {
//   const ul = document.querySelector('#beer-list');
//   beers.forEach(function(beer){
//     const li = document.createElement("li");
//     li.textContent = beer.name;
//     ul.appendChild(li);
//   });
// }

const populationDropDown = function(beers){
  const dropdown = document.querySelector('#beers');
  beers.forEach(function(beers){
    const option = document.createElement('option');
    option.value = JSON.stringify(beers);
    option.textContent = beers.name;
    dropdown.appendChild(option);
  });
}

const handleSelectChange = function() {
  const beers = JSON.parse(this.value)
  const ul = document.querySelector('#selected-beer');
  // const nameli = document.querySelector('#nameli');
  const descriptionli = document.querySelector('#descriptionli');

  // nameli.textContent = beers.name;
  descriptionli.textContent = beers.description;

  // ul.appendChild(nameli)
  ul.appendChild(descriptionli)
}

window.addEventListener('load', app);
