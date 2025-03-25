const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
/* Note to self: this is an array (you knew this already) */
const imageFiles = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
/* Note to self: this is an object (you did not know this) */
const altText = {
    "pic1.jpg": 'Closeup of a human eye',
    "pic2.jpg": 'Rock that looks like a wave',
    "pic3.jpg": "Purple and white pansies",
    "pic4.jpg": "Section of wall from a pharoah\'s tomb",
    "pic5.jpg": "Large moth on a leaf"
  }

/* Looping through images */
for (const i of imageFiles) {
    const newImage = document.createElement('img');
    /* note to self: ${} lets you attach a non-string to a string. has to be inside backticks (``) */
    newImage.setAttribute('src', `images/${i}`);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    /* event listener goes here */
    /* note to self: I think "=>" lets you pass something in, and then you can run whatever code you want inside the eventlistener */
    /* also, "e" is basically the event itself. it has all the info about the event. */
    newImage.addEventListener("click", (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    buttonClass = btn.getAttribute("class");
    if (buttonClass == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
