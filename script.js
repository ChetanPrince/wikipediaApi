document.addEventListener("DOMContentLoaded",()=>{
const input = document.querySelector("input[type='search']");
const output = document.getElementById("output");
const resultCounter = document.getElementById("resultCounter");
const button = document.getElementById("button");
button.addEventListener("click", (e)=>{
e.preventDefault();
const searchTerm = input.value;
if(searchTerm){
    searchWikipedia(searchTerm);
}
});
function searchWikipedia(searchTerm){
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodeURIComponent(searchTerm)}`;
        fetch(url)
        .then(response => response.json())
        .then(data=>{
        displayResults(data.query.search);
    }).catch(error =>alert("Error: " + error));
}

});
