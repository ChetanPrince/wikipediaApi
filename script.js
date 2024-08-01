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

});
