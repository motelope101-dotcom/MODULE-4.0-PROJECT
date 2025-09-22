// API 1: "https://www.omdbapi.com/?apikey=c2123f42&s=fast"

async function main() {
const fast = await fetch("https://www.omdbapi.com/?apikey=c2123f42&s=fast")
const fastData = await fast.json();
console.log(
fastData
  .map(fast = `<div class="movie" 
  <figure class="movie__img--wrapper">
  <img class="movie__img" src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVzdCUyMG1hcnZlbCUyMHVuaXZlcnNlJTIwbW92aWVzfGVufDB8fDB8fHww " alt="">
  </figure>
  <div class="movie__title">
    ACTION-PACKED
  </div>
  <div class="movie__ratings">
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  <i class="fas fa-star"></i>
  </div>
  <div class="movie__description">
    *SACRIFICE
    *RISING TO THE OCCASION
    *RESPONSIBILITY
  </div>
  <div class="movie__price">
  <span class="movie__price--normal">$14.00></span>$10.00
  </div>
  </div>`)
          .join ("")
   );

}


main ();




















function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}