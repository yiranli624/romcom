// Create variables targetting the relevant DOM elements here 👇
var newCoverImage = document.querySelector('.cover-image');
var newTitle = document.querySelector('.cover-title');
var newTaglineOne = document.querySelector('.tagline-1');
var newTaglineTwo = document.querySelector('.tagline-2');
var homePageLocation = document.querySelector('.home-view');
var makeNewFormLocation = document.querySelector('.form-view');
var viewSavedCoverLocation = document.querySelector('.saved-view');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeNewFormButton = document.querySelector('.make-new-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
// we need to have the function running once the page is loaded
// were looking out for how to use ONLOAD and where
randomCoverButton.addEventListener('click', showNewRandomCover);
makeNewFormButton.addEventListener('click', createNewCover);
viewSavedCoversButton.addEventListener('click', viewSavedCovers);
// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
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
function createNewCover() {
  makeNewFormLocation.classList.remove('hidden');
  homePageLocation.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');

}
function viewSavedCovers() {
  viewSavedCoverLocation.classList.remove('hidden');
  homePageLocation.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
}


randomHomePage();
