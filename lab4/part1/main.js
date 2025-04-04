// starting varibles and functions
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// text arrays
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// event listener (wip?)
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // replace strings (there's probably a better way to do this but I'm learning okay)
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    //WHAT THE HELL IS A STONE?? WHAT ARE THE BRITISH ON    
    // also, note to self: for concatenation like this, you have to use `` instead of ""
    const weight = `${Math.round(300 * 0.07143)} stone`;

    // WHAT THE HELL IS A CENTIGRADE??????????? ARE THESE REAL UNITS???
    // oh okay it's literally just celsius
    const temperature = `${Math.round(5 / 9 * (94 - 32))} centigrade`;

    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}