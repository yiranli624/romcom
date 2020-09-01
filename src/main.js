// Create variables targetting the relevant DOM elements here 👇
var newCoverImage = document.querySelector('.cover-image');
var newTitle = document.querySelector('.cover-title');
var newTaglineOne = document.querySelector('.tagline-1');
var newTaglineTwo = document.querySelector('.tagline-2');
var homePageSection = document.querySelector('.home-view');
var formViewSection = document.querySelector('.form-view');
var savedCoverSection = document.querySelector('.saved-covers-section');
var savedViewSection = document.querySelector('.saved-view ');
var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');
var homeButton = document.querySelector('.home-button');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var makeNewFormButton = document.querySelector('.make-new-button');
var createUserCoverButton = document.querySelector('.create-new-book-button');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;
// Add your event listeners here 👇
// we need to have the function running once the page is loaded
// were looking out for how to use ONLOAD and where
homeButton.addEventListener('click', showHomeCover);
randomCoverButton.addEventListener('click', createRandomCover);
makeNewFormButton.addEventListener('click', createNewCover);
viewSavedCoversButton.addEventListener('click', displaySavedCovers);
createUserCoverButton.addEventListener('click', storeUserData);
saveCoverButton.addEventListener('click', saveCover);
savedViewSection.addEventListener('dblclick', removeSavedCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function generateCover(cover, title, tagline1, tagline2) {
  newCoverImage.src = cover;
  newTitle.innerText = title;
  newTaglineOne.innerText = tagline1;
  newTaglineTwo.innerText = tagline2;
}
function loadHomePage() {
  generateCover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
}
function createRandomCover() {
  currentCover = new Cover(loadHomePage());
}
function switchPage() {
  homeButton.classList.remove('hidden');
  homePageSection.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedViewSection.classList.add('hidden');
  formViewSection.classList.remove('hidden');
}
function createNewCover() {
  switchPage();
}
function viewSavedCovers() {
  switchPage();
  savedViewSection.classList.toggle('hidden');
  formViewSection.classList.toggle('hidden');
}
function showHomeCover() {
  homeButton.classList.add('hidden');
  homePageSection.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  savedViewSection.classList.add('hidden');
  formViewSection.classList.add('hidden');
}
function storeUserData() {
  event.preventDefault();
  currentCover = new Cover (
    userCover.value,
    userTitle.value,
    userDesc1.value,
    userDesc2.value
    );
  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
  showHomeCover();
  generateCover(currentCover.cover, currentCover.title, currentCover.tagline1, currentCover.tagline2);
}
function saveCover() {
  currentCover = new Cover(
    newCoverImage.src,
    newTitle.innerText,
    newTaglineOne.innerText,
    newTaglineTwo.innerText
    );
  var allCovers = [];
  var allTitles = [];
  var tagLineOne = [];
  var tagLineTwo = [];
  for (var i=0; i<savedCovers.length; i++) {
    allCovers.push(savedCovers[i].cover);
    allTitles.push(savedCovers[i].title);
    tagLineOne.push(savedCovers[i].tagline1);
    tagLineTwo.push(savedCovers[i].tagline2);
  }
  if (allCovers.includes(currentCover.cover) === false) {
    savedCovers.push(currentCover);
  } else if (allTitles.includes(currentCover.title) === false) {
    savedCovers.push(currentCover);
  } else if (tagLineOne.includes(currentCover.tagline1) === false) {
    savedCovers.push(currentCover);
  } else if (tagLineTwo.includes(currentCover.tagline2) === false) {
    savedCovers.push(currentCover);
  }
}
function displaySavedCovers() {
  viewSavedCovers();
  savedCoverSection.innerHTML = '';
  for (var i = 0; i < savedCovers.length; i++) {
    savedCoverSection.innerHTML +=
    `<section class="mini-cover">
      <img class="cover-image" src= ${savedCovers[i].cover}>
      <h2 class="cover-title"> ${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
    </section>`;
  }
}
function removeSavedCover() {
  if(event.target.classList.contains('cover-image')) {
    for (var i = 0; i < savedCovers.length; i++) {
      if (event.target.src === savedCovers[i].cover) {
        savedCovers.splice(i,1);
        event.target.closest('.mini-cover').remove();
      }
    }
  }
}
loadHomePage();
