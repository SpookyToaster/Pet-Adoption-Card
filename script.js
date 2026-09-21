// Week 4 Mastery Project: Interactive Pet Adoption Card
// Write your solution below. Do not change the provided HTML or CSS.
//
// Plan before coding:
// - Identify the page elements your program must access.
// - Decide which named function will handle each button interaction.
// - Determine which content, properties, and attributes each function must change.
// - Register an event listener for every button.
// - Test one interaction at a time in the browser and check the console for errors.

// ======================= Assignment requirements Below =======================

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



// ======================= Assignment Code Below =======================


//<button id="next-pet" type="button">Meet Another Pet</button>

// <img id="pet-image" src="images/mochi.svg" alt="Mochi, a friendly cat">
//images\pepper.svg
//images\mochi.svg

// pet details div contains pet-name and pet-description elements

// doesn't swap between mutliple pets, just swaps to a single other pet. would be nice to extend this to a list of pets in the future.
// also need to reset the adopt button and favorite button states when showing another pet. Could do that with a bool. declare within the showAnotherPet function?
function showAnotherPet() {
    document.getElementById("pet-image").src = "images/pepper.svg";
    document.getElementById("pet-image").alt = "Pepper, a friendly cat";
    document.getElementById("pet-name").textContent = "Pepper";
    document.getElementById("pet-description").textContent = "Pepper is a playful and affectionate cat who loves to cuddle.";
}



//<button id="favorite-pet" type="button" aria-pressed="false">☆ Favorite</button>

function toggleFavorite() {
    // Declare two value states for the fav button. if loop will update state
    var favoriteButton = document.getElementById("favorite-pet");
    var isFavorited = favoriteButton.getAttribute("aria-pressed") === "true";

    // IF statement to toggle favorite state
    if (isFavorited) {
        favoriteButton.setAttribute("aria-pressed", "false");
        favoriteButton.textContent = "☆ Favorite";
    } else {
        favoriteButton.setAttribute("aria-pressed", "true");
        favoriteButton.textContent = "★ Favorited";
    }

}

// noticed that the adoption button stays disabled even after clicking meet another pet. need to check assignment if i need to store the state of "adoption pending" and reset it when showing another pet.
// <button id="adopt-pet" type="button">Adopt Me</button>
function adoptPet() {
    var adoptButton = document.getElementById("adopt-pet");

    //revised to use getelementbyid and update the adoption status text content directly instead of the button text
    document.getElementById("adoption-status").textContent = "Adoption pending";
    adoptButton.disabled = true;
}



function resetCard() {
    // Reset the card to its initial state when showing another pet? could bypass the switching issue?
    // Reset the adopt button and favorite button states for completeness when showing another pet. need to reset to default state with mochi. 
    var adoptButton = document.getElementById("adopt-pet");
    adoptButton.textContent = "Adopt Me";
    document.getElementById("adoption-status").textContent = "Available";
    adoptButton.disabled = false;

    var favoriteButton = document.getElementById("favorite-pet");
    favoriteButton.setAttribute("aria-pressed", "false");
    favoriteButton.textContent = "☆ Favorite";

    // section to restore mochi
    document.getElementById("pet-image").src = "images/mochi.svg";
    document.getElementById("pet-image").alt = "Mochi, a friendly cat";
    document.getElementById("pet-name").textContent = "Mochi";
    document.getElementById("pet-description").textContent = "A curious cat who loves sunny windows and quiet afternoons.";

}


// Events
// Register all four button interactions with addEventListener(). Do not add inline onclick attributes.


// changes on click. Goood to go.
document.getElementById("next-pet").addEventListener("click", showAnotherPet);

// Favorite button click event
document.getElementById("favorite-pet").addEventListener("click", toggleFavorite);

// Adopt Me button click event
document.getElementById("adopt-pet").addEventListener("click", adoptPet);

// Reset Card button click event
document.getElementById("reset-card").addEventListener("click", resetCard);