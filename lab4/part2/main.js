const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = ["Closeup of an eye", "What appears to be a sand dune", "White and purple flowers", "Old Egyptian drawing, depicting three people", "Moth on a leaf"]

/* Looping through images */
for (const i of imageFiles) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageFiles[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    /* event listener goes here */
    newImage.addEventListener("click", displayedImage.src = EventTarget.src);
}

/* Wiring up the Darken/Lighten button */
