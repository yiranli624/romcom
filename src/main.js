// Create variables targetting the relevant DOM elements here 👇
var newCoverImage = document.querySelector('.cover-image');
var newTitle = document.querySelector('.cover-title');
var newTaglineOne = document.querySelector('.tagline-1');
var newTaglineTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// we need to have the function running once the page is loaded
// were looking out for how to use ONLOAD and where
randomCoverButton.addEventListener("click", showNewRandomCover);

// Create your event handlers and other functions here 👇
function randomHomePage(){
  newCoverImage.src = covers[getRandomIndex(covers)];
  newTitle.innerText= titles[getRandomIndex(titles)];
  newTaglineOne.innerText = descriptors[getRandomIndex(descriptors)];
  newTaglineTwo.innerText = descriptors[getRandomIndex(descriptors)];
}
function showNewRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)] );
  newCoverImage.src = currentCover.cover;
  newTitle.innerText = currentCover.title;
  newTaglineOne.innerText = currentCover.tagline1;
  newTaglineTwo.innerText = currentCover.tagline2;
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



randomHomePage();
