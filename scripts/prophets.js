const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
//above: JSON array of objects containing prophet information
const cards = document.getElementById('cards');

async function getProphetData() {
    const response = await fetch(url);
    //above:  data request from website.  await makes further code pause until data returned.
    const data = await response.json();
    //above: parses JSON to object and saves in the variable "data".  await used to pause code until finished.
    console.log(data); // temp output test of data response 
}
getProphetData();  //call to the above function 