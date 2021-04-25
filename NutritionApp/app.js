let searchForm = document.querySelector("form")
let searchResultDiv = document.querySelector(".search-result")
let searchResultDivRecipe = document.querySelector(".search-resultRecipe")
let recipeDetails = document.querySelector(".recipe-details-content")
let recipeDetailsContent = document.querySelector('.meal-details-content');
let container = document.querySelector(".container")
let popup = document.querySelector("#popup")
let recipeCloseBtn = document.getElementById('recipe-close-btn');
let recipeCloseBtn1 = document.getElementById('recipe-close-btn1');
let searchQuery = "";
let appid = "3dc465e5";
let appkey = "c5aa7e5db74ec4d4a8a7a00e7e7c8ef3";

let appidR = "d3d93041";
let appkeyR = "e701c0498e001b0673feac0e48c17684";

searchResultDivRecipe.addEventListener("click", getData);
searchResultDivRecipe.addEventListener("click", getRecipe);

recipeCloseBtn.addEventListener('click', () => {
  recipeDetails.parentElement.classList.remove('showRecipeData');
});

recipeCloseBtn1.addEventListener('click', () => {
  recipeDetailsContent.parentElement.classList.remove('showRecipeData');
});

function load() {
  popup.classList.add("show")
  popup1.classList.add("show")
};


searchForm.addEventListener("submit", (e)=>{
   e.preventDefault();
   searchQuery = e.target.querySelector('input').value;
   fetchAPI();
});

async function fetchAPI(){
  const baseUrl = `https://api.edamam.com/api/nutrition-data?app_id=${appid}&app_key=${appkey}&ingr=${searchQuery}`;
  const baseUrl1 = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appidR}&app_key=${appkeyR}&from=0&to=21`;
  const response = await fetch(baseUrl);
  const response1 = await fetch(baseUrl1);
  const nutriData = await response.json();
  const foodData = await response1.json();
  if (foodData.more === true) {
    generateHTML(foodData);
    console.log(foodData);
    popup1.classList.add("show")  } 
    else {
    popup1.classList.remove("show")
    searchResultDiv.innerHTML = "";
    searchResultDivRecipe.innerHTML = "";
    popup.classList.add("show")

  }
  analyzeHTML(nutriData);
  console.log(nutriData);
}

function analyzeHTML(data){
  searchResultDiv.innerHTML = `
     <div class="performance-facts" data-aos="zoom-in-up">
        <header class="performance-facts__header">
          <h2 class="performance-facts__title">Nutrition Facts</h2>
        </header>
            <table class="performance-facts__table">
              <thead>
                <tr>
                  <th colspan="3" class="small-info">Amount Per Serving</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <th colspan="2"><b>Calories</b> ${Math.floor(data.calories)}</th>
                    <td>Calories from Fat ${Math.floor(data.totalNutrientsKCal.FAT_KCAL.quantity)}</td>
                  </tr>
                  <tr class="thick-row">
                    <td colspan="3" class="small-info"><b>% Daily Value*</b></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Total Fat</b> ${Math.floor(data.totalNutrients.FAT.quantity)}g</th>
                    <td><b>${Math.floor(data.totalDaily.FAT.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Saturated Fat ${Math.floor(data.totalNutrients.FASAT.quantity)}g</th>
                    <td><b>${Math.floor(data.totalDaily.FASAT.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Trans Fat ${Math.floor(data.totalNutrients.FAT.quantity)}g</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Cholesterol</b> ${Math.floor(data.totalNutrients.CHOLE.quantity)}mg</th>
                    <td><b>${Math.floor(data.totalDaily.CHOLE.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Sodium</b> ${Math.floor(data.totalNutrients.NA.quantity)}mg</th>
                    <td><b>${Math.floor(data.totalDaily.NA.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Total Carbohydrate</b> ${Math.floor(data.totalNutrients.CHOCDF.quantity)}g</th>
                    <td><b>${Math.floor(data.totalDaily.CHOCDF.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Dietary Fiber ${Math.floor(data.totalNutrients.FIBTG.quantity)}g</th>
                    <td><b>${Math.floor(data.totalDaily.FIBTG.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Sugars ${Math.floor(data.totalNutrients.SUGAR.quantity)}g</th>
                    <td></td>
                  </tr>
                  <tr class="thick-end">
                    <th colspan="2"><b>Protein</b> ${Math.floor(data.totalNutrients.PROCNT.quantity)}g</th>
                    <td></td>
                  </tr>
                </tbody>
            </table>
     
            <table class="performance-facts__table--grid">
                <tbody>
                  <tr>
                    <td colspan="2">Vitamin A ${Math.floor(data.totalDaily.VITA_RAE.quantity)}%</td>
                    <td>Vitamin C ${Math.floor(data.totalDaily.VITC.quantity)}%</td>
                  </tr>
                  <tr class="thin-end">
                    <td colspan="2">Calcium ${Math.floor(data.totalDaily.CA.quantity)}%</td>
                    <td>Iron ${Math.floor(data.totalDaily.FE.quantity)}%</td>
                  </tr>
                </tbody>
            </table>
     
            <p class="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>
     
            <table class="performance-facts__table--small small-info">
                <thead>
                  <tr>
                    <td colspan="2"></td>
                    <th>Calories:</th>
                    <th>2,000</th>
                    <th>2,500</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2">Total Fat</th>
                    <td>Less than</td>
                    <td>${Math.floor(data.totalNutrients.FAT.quantity)*20}kcal</td>
                    <td>${Math.floor(data.totalNutrients.FAT.quantity)*25}kcal</td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Saturated Fat</th>
                    <td>Less than</td>
                    <td>${Math.floor(data.totalNutrients.FASAT.quantity)}g</td>
                    <td>${Math.floor(data.totalNutrients.FASAT.quantity)*1.5}g</td>
                  </tr>
                  <tr>
                    <th colspan="2">Cholesterol</th>
                    <td>Less than</td>
                    <td>${Math.floor(data.totalNutrients.CHOLE.quantity)}mg</td>
                    <td>${Math.floor(data.totalNutrients.CHOLE.quantity)*1.5}mg</td>
                  </tr>
                  <tr>  
                    <th colspan="2">Sodium</th>
                    <td>Less than</td>
                    <td>${Math.floor(data.totalNutrients.NA.quantity)}mg</td>
                    <td>${Math.floor(data.totalNutrients.NA.quantity)*1.5}mg</td>
                  </tr>
                  <tr>
                    <th colspan="3">Total Carbohydrate</th>
                    <td>${Math.floor(data.totalNutrients.CHOCDF.quantity)}g</td>
                    <td>${Math.floor(data.totalNutrients.CHOCDF.quantity)*1.5}g</td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th colspan="2">Dietary Fiber</th>
                    <td>25g</td>
                    <td>30g</td>
                  </tr>
                </tbody>
            </table>
      </div>
 
      <div class="nutritionFacts" data-aos="zoom-in-up">
        <header class="nutritionFacts_header">
          <h2 class="nutritionFacts_title">Nutrition Facts</h2>
        </header> 
        <div class="labels">
          <h2>Health Labels: </h2>
          <p>${data.healthLabels}</p> 
        </div>
        <div class="labels">
          <h2>Diet Labels: </h2>
          <p>${data.dietLabels}</p> 
        </div>
          <table class="performance-facts__table--grid">
            <tbody>
            <tr>
              <th colspan="2"><b>Energy</b></th>
              <td><b>${Math.floor(data.totalDaily.ENERC_KCAL.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Vitamin D</b></th>
              <td><b>${Math.floor(data.totalDaily.VITD.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Vitamin E</b></th>
              <td><b>${Math.floor(data.totalDaily.TOCPHA.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Vitamin K</b></th>
              <td><b>${Math.floor(data.totalDaily.VITK1.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Vitamin B6</b></th>
              <td><b>${Math.floor(data.totalDaily.VITB6A.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Vitamin B12</b></th>
              <td><b>${Math.floor(data.totalDaily.VITB12.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Iron</b></th>
              <td><b>${Math.floor(data.totalDaily.FE.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Zinc</b></th>
              <td><b>${Math.floor(data.totalDaily.ZN.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Phosphorus</b></th>
              <td><b>${Math.floor(data.totalDaily.P.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Thiamin (B1)</b></th>
              <td><b>${Math.floor(data.totalDaily.THIA.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Riboflavin (B2)</b></th>
              <td><b>${Math.floor(data.totalDaily.RIBF.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Magnesium</b></th>
              <td><b>${Math.floor(data.totalDaily.MG.quantity)}%</b></td>
            </tr>
            <tr>
              <th colspan="2"><b>Folate</b></th>
              <td><b>${Math.floor(data.totalDaily.FOLDFE.quantity)}%</b></td>
            </tr>
            </tbody>
          </table>
      </div>`
}


function generateHTML(data) {
  popup.classList.remove("show")
  let menuItem='';

  for (let i = 0;i < 20; i++) {
  menuItem=menuItem+ `
  <div class="item" data-aos="zoom-in-up" data-label=${data.hits[i].recipe.label}>
    <img src="${data.hits[i].recipe.image}" alt="img">
      <div class="flex-container">
        <h1 class="title">${data.hits[i].recipe.label}</h1>
      </div>
	      <div class = recipeBtn>
          <a class="view-btn" target="_blank" href="${data.hits[i].recipe.url}">View Recipe</a>
	        <a class="analyze-btn">Analyze</a>
	      </div>
  </div>`
}
searchResultDivRecipe.innerHTML = menuItem;
}

function getData(e){
  e.preventDefault();
    if(e.target.classList.contains('analyze-btn')){
      let recipeItem = e.target.parentElement.parentElement;
      fetch(`https://api.edamam.com/search?q=${recipeItem.dataset.label}&app_id=${appidR}&app_key=${appkeyR}`)
      .then(response => response.json())
      .then(data => recipeData(data.hits));
  }
}


function recipeData(data){
  console.log(data);
  data = data[0];
  let html = `
  <div class="performance-facts" data-aos="zoom-in-up">
        <header class="performance-facts__header">
          <h2 class="performance-facts__title">Nutrition Facts</h2>
        </header>
            <table class="performance-facts__table">
              <thead>
                <tr>
                  <th colspan="3" class="small-info">Amount Per Serving</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <th colspan="2"><b>Calories</b> ${Math.floor(data.recipe.calories)} </th>
                    <td>Calories from Fat ${Math.floor(data.recipe.totalNutrients.CHOCDF.quantity)}g</td>
                  </tr>
                  <tr class="thick-row">
                    <td colspan="3" class="small-info"><b>% Daily Value*</b></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Total Fat</b> g</th>
                    <td><b>${Math.floor(data.recipe.totalDaily.FAT.quantity)} %</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Saturated Fat g</th>
                    <td><b>${Math.floor(data.recipe.totalDaily.FASAT.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Trans Fat g</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Cholesterol</b> mg</th>
                    <td><b>${Math.floor(data.recipe.totalDaily.CHOLE.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Sodium</b> mg</th>
                    <td><b>${Math.floor(data.recipe.totalDaily.NA.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <th colspan="2"><b>Total Carbohydrate</b> g</th>
                    <td><b>${Math.floor(data.recipe.totalDaily.CHOCDF.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Dietary Fiber g</th>
                    <td><b>${Math.floor(data.recipe.totalDaily.FIBTG.quantity)}%</b></td>
                  </tr>
                  <tr>
                    <td class="blank-cell"></td>
                    <th>Sugars g</th>
                    <td></td>
                  </tr>
                  <tr class="thick-end">
                    <th colspan="2"><b>Protein</b> g</th>
                    <td></td>
                  </tr>
                </tbody>
            </table>
      
            <table class="performance-facts__table--grid">
                <tbody>
                  <tr>
                    <td colspan="2">Vitamin A ${Math.floor(data.recipe.totalDaily.VITA_RAE.quantity)}%</td>
                    <td>Vitamin C ${Math.floor(data.recipe.totalDaily.VITC.quantity)}%</td>
                  </tr>
                  <tr class="thin-end">
                    <td colspan="2">Calcium ${Math.floor(data.recipe.totalDaily.CA.quantity)}%</td>
                    <td>Iron ${Math.floor(data.recipe.totalDaily.FE.quantity)}%</td>
                  </tr>
                  <tr class="thin-end">
                    <td colspan="2">Vitamin E ${Math.floor(data.recipe.totalDaily.TOCPHA.quantity)}%</td>
                    <td>Vitamin K ${Math.floor(data.recipe.totalDaily.VITK1.quantity)}%</td>
                  </tr>
                  <tr class="thin-end">
                    <td colspan="2">Vitamin B6 ${Math.floor(data.recipe.totalDaily.VITB6A.quantity)}%</td>
                    <td>Vitamin B12 ${Math.floor(data.recipe.totalDaily.VITB12.quantity)}%</td>
                  </tr> <tr class="thin-end">
                    <td colspan="2">Zinc ${Math.floor(data.recipe.totalDaily.ZN.quantity)}%</td>
                    <td>Folate ${Math.floor(data.recipe.totalDaily.FOLDFE.quantity)}%</td>
                  </tr>
                  </tr> <tr class="thin-end">
                  <td colspan="2">Phosphorus ${Math.floor(data.recipe.totalDaily.P.quantity)}%</td>
                  <td>Thiamin ${Math.floor(data.recipe.totalDaily.THIA.quantity)}%</td>
                </tr>
                </tbody>
            </table>
      </div>
  `;
recipeDetails.innerHTML = html;
recipeDetails.parentElement.classList.add('showRecipeData');
}


function getRecipe(e){
  e.preventDefault();
    if(e.target.classList.contains('view-btn')){
      let recipeItem = e.target.parentElement.parentElement;
      fetch(`https://api.edamam.com/search?q=${recipeItem.dataset.label}&app_id=${appidR}&app_key=${appkeyR}`)
      .then(response => response.json())
      .then(data => mealDetails(data.hits));
  }
}


function mealDetails(data){
  console.log(data);
  data = data[0];
  let html = `
        <div class = "recipe-instruct">
            <h3>Ingrients:</h3>
            <p>${data.recipe.ingredientLines}</p>
        </div>
    <h3>Dish Type:</h3>
    <p class = "dish-labels"> ${data.recipe.dishType}</p>
    <h3>Health Labels</h3>
    <p class = "health-labels">${data.recipe.healthLabels}</p>
    <h3>Diet Labels</h3>
    <p class = "diet-labels">${data.recipe.dietLabels}</p>
    <h3>Cautions</h3>
    <p class = "caution-labels">${data.recipe.cautions}</p>
        <div class = "recipe-link">
            <a href = "${data.recipe.url}" target = "_blank">View Full Recipe</a>
        </div>
  `;
recipeDetailsContent.innerHTML = html;
recipeDetailsContent.parentElement.classList.add('showRecipeData');
}



// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
