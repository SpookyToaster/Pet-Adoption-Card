// Week 4 Mastery Project: Interactive Pet Adoption Card
// Write your solution below. Do not change the provided HTML or CSS.
//
// Plan before coding:
// - Identify the page elements your program must access.
// - Decide which named function will handle each button interaction.
// - Determine which content, properties, and attributes each function must change.
// - Register an event listener for every button.
// - Test one interaction at a time in the browser and check the console for errors.

// ======================= Assignment Code Below =======================


// Select Elements
    // use document.getElementById() to select all required page elements


// Meet another pet button
    // when clicked, update the image src, image alt, pet name, and description. use textcontent for the name and description. 

// Favorite Button
    // when clicked, use getattribute() to read the current aria-pressed value. change to opposite value with setAttribute() and change label bethween favorite and favorited. review aria-pressed and att methods if needed.
    
// Adopt me button
    // when clicked, change status to adoption peneding and disable the adopt me button


// Reset Button
    // when clicked, restore mochi, the original text and image, and available status, and unfavorited button, and enable the adopt me button

// Functions
    // create 4 named functions - one for each button behavior. use function names

    //<button id="next-pet" type="button">Meet Another Pet</button>

    // <img id="pet-image" src="images/mochi.svg" alt="Mochi, a friendly cat">
    //images\pepper.svg
    //images\mochi.svg

    // pet details div contains pet-name and pet-description elements

    function showAnotherPet() {
        document.getElementById("pet-image").src = "images/pepper.svg";
        document.getElementById("pet-image").alt = "Pepper, a friendly cat";
        document.getElementById("pet-name").textContent = "Pepper";
        document.getElementById("pet-description").textContent = "Pepper is a playful and affectionate cat who loves to cuddle.";
}




function toggleFavorite() {
}

function adoptPet() {
}

function resetCard() {
}


// Events
    // Register all four button interactions with addEventListener(). Do not add inline onclick attributes.


// changes on click. Goood to go.
document.getElementById("next-pet").addEventListener("click", showAnotherPet);