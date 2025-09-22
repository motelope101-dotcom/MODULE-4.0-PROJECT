// API 1: "https://www.omdbapi.com/?apikey=c2123f42&s=fast"

async function main(){
const fast = await fetch("https://www.omdbapi.com/?apikey=c2123f42&s=fast")
const fastData = await fast.json();
console.log(fastData);
}


main ();




















function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}