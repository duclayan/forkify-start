// Global app controller

var searchItem = document.querySelector(".search__field");
var searchForm = document.querySelector(".search");
var recipeColumn = document.querySelector(".results__list");
var displayColumn = document.querySelector(".recipe");
var addToCart = document.querySelector(".btn-small.recipe__btn");
var shoppingListColumn = document.querySelector(".shopping");
var buttonDiv = document.querySelector(".results__pages");
var recipeList, currentRecipe, ingredientItem;
var pages = [];
