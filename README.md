# 🐾 Interactive Pet Adoption Card

Turn a static pet profile into an interactive webpage using JavaScript and the Document Object Model (DOM).

The HTML, CSS, and pet images are already provided. Your task is to plan and write the JavaScript that controls the page's four buttons.

## Learning objectives

By completing this project, you will demonstrate that you can:

- connect an external JavaScript file with `defer`;
- select HTML elements with `document.getElementById()`;
- update visible text with `textContent`;
- modify element properties such as an image's `src` and `alt`;
- read and change an HTML attribute with `getAttribute()` and `setAttribute()`;
- register click events with `addEventListener()`; and
- organize related behaviors with named functions.

## Getting started

1. Download or clone this repository.
2. Open the project folder in your code editor.
3. Open `index.html` in a web browser.
4. Read the complete assignment directions in Canvas.
5. Plan your solution before writing code in `script.js`.
6. Test one interaction at a time and watch the browser console for errors.

## The four buttons

### Meet Another Pet

Change the displayed pet from **Mochi** to **Pepper**. Update the image `src`, image `alt`, pet name, and pet description. Use the supplied `images/pepper.svg` file for Pepper.

### Favorite

Toggle the Favorite button between these states:

| State | Button label | `aria-pressed` |
|---|---|---|
| Not selected | ☆ Favorite | `"false"` |
| Selected | ★ Favorited | `"true"` |

Use `getAttribute()` to read the current `aria-pressed` value and `setAttribute()` to change it. The visible label and accessible state must always agree.

### Adopt Me

Change the adoption status to **Adoption pending**, then disable the Adopt Me button.

### Reset

Restore the complete original card:

- Mochi's image, alternative text, name, and description;
- the **Available** adoption status;
- the **☆ Favorite** label and `aria-pressed="false"`; and
- an enabled Adopt Me button.

## Project rules

- Write your solution in `script.js`.
- Do not change the supplied element IDs.
- Keep JavaScript in the external file already loaded with `defer`.
- Use `textContent` for required visible text changes.
- Use `addEventListener()` for all four buttons.
- Do not add inline event attributes such as `onclick`.
- Do not replace the project with a framework or library.

## Project files

```text
Pet-Adoption-Card/
├── images/
│   ├── mochi.svg
│   └── pepper.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Before submitting

- [ ] Meet Another Pet changes Mochi to Pepper.
- [ ] Favorite toggles both its label and `aria-pressed` value.
- [ ] Adopt Me changes the status and disables itself.
- [ ] Reset restores the complete original state.
- [ ] All four buttons use event listeners.
- [ ] The browser console contains no uncaught errors.
- [ ] All supplied project files are included.

## Submission

Place the entire completed project folder in one ZIP file and submit that ZIP through the Canvas assignment. Do not submit individual files.

> This is a mastery assessment. Every required objective must be demonstrated to pass. If an objective is marked **Not Yet**, revise that portion and resubmit.
