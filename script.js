"use strict"
const searchForms = document.querySelector('.search');


const searchRecipes = async function(query) {
    let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    let resList = await result.json();
    console.log(resList);
    let recipe = resList.recipes;
    document.querySelector('.results__list').innerHTML = recipe;
}


searchForms.addEventListener('submit', e => {
    let query = document.querySelector('.search__field').value;
    e.preventDefault();
    searchRecipes(query);

})






// const sample = function(query){
// fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
// .then(response => response.json())
// .then(responseData => {
//     console.log(responseData);
// })
// }
// sample("pizza");    
// "use strict"





// const getRecipe = async function(id) {
//     let result = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
//     return result.json()
// }

// document.querySelector(".search__btn").onclick = async function() {
//     let query = document.querySelector(".search__field").value;
//     let result = await searchRecipes(query);

//     fillResults(result, 2)

// }

// const resultClickHandler = async function() {
//     for (let li of document.querySelector(".result__list").children) {
//         li.classList.remove("results__link--active")
//     }
//     this.classList.add("results__link--active")

//     let result = await getRecipe(this.recipeId)
//     let recipe = result.recipe

//     document.querySelector(".recipe").innerHTML = 
//                         `<figure class="recipe__fig">
//                             <img src="${recipe.image_url}" alt="Tomato" class="recipe__img">
//                             <h1 class="recipe__title">
//                                 <span>${recipe.title}</span>
//                             </h1>
//                         </figure>
//                         <div class="recipe__details">
//                             <div class="recipe__info">
//                                 <svg class="recipe__info-icon">
//                                     <use href="img/icons.svg#icon-stopwatch"></use>
//                                 </svg>
//                                 <span class="recipe__info-data recipe__info-data--minutes">45</span>
//                                 <span class="recipe__info-text"> minutes</span>
//                             </div>
//                             <div class="recipe__info">
//                                  <svg class="recipe__info-icon">
//                                      <use href="img/icons.svg#icon-man"></use>
//                                  </svg>
//                                  <span class="recipe__info-data recipe__info-data--people">4</span>
//                                  <span class="recipe__info-text"> servings</span>
//                                  <div class="recipe__info-buttons">
//                                      <button class="btn-tiny">
//                                          <svg>
//                                              <use href="img/icons.svg#icon-circle-with-minus"></use>
//                                          </svg>
//                                      </button>
//                                      <button class="btn-tiny">
//                                         <svg>
//                                             <use href="img/icons.svg#icon-circle-with-plus"></use>
//                                         </svg>
//                                      </button>
//                                  </div>
//                            </div>
//                            <button class="recipe__love">
//                                <svg class="header__likes">
//                                    <use href="img/icons.svg#icon-heart-outlined"></use>
//                                </svg>
//                            </button>
//                         </div>`
// }

// const fillResults = function(result, page) {
//     resultsList.innerHTML = ""

//     for(let[index, recipe] of result.recipes.entries()) {
//         if(!(page*10 <= index && (page*10)+10 > index)) continue
//         let newLi = document.createElement("li")
//         newLi.innerHTML = 
//                     `<a class="results__link" href="#${recipe.recipe_id}">
//                         <figure class="results__fig">
//                             <img src="${recipe.image_url}" alt="Test">
//                         </figure>
//                         <div class="results__data">
//                             <h4 class="results__name">${recipe.title}</h4>
//                             <p class="results__author">${recipe.publisher}</p>
//                         </div>
//                     </a>`
//         newLi.onclick = resultClickHandler
//         newLi.recipeId = recipe.recipe_id
//         resultsList.appendChild(newLi)
//         generatePageButton(result, page) 
//     }
// }

// const generatePageButton = function (result, page) {
//     if (result.count <= 10) {
//         resultsPages.innerHTML = ""
//         return
//     }

//     resultsPages.innerHTML = 
//                             `<button class="btn-inline results__btn--prev">
//                                 <svg class="search__icon">
//                                     <use href="img/icons.svg#icon-triangle-left"></use>
//                                 </svg>
//                                 <span>${page-1}</span>
//                             </button>
//                             <button class="btn-inline results__btn--next">
//                                 <span>${page+1}</span>
//                                 <svg class="search__icon">
//                                     <use href="img/icons.svg#icon-triangle-right"></use>
//                                 </svg>
//                             </button>`
//     resultsPages.querySelector(".results__btn--prev").onclick = function() {
//         fillResults(result, page-1)
//     }
//     resultsPages.querySelector(".results__btn--next").onclick = function() {
//         fillResults(result, page+1)
//     }
// }





















