# Calendar App

A small browser calendar that displays the days of each month and highlights today's date. Use the arrows to move between months, including across years, or select **Reset** to return to the current month.

## Run locally

Open `index.html` in a web browser. No build tools or dependencies are required.

## Technologies

- HTML
- CSS
- JavaScript

## JavaScript practice

This project uses arrow functions for its calendar logic and inline `onclick` handlers for the month-navigation and reset controls. I usually select elements and attach events with methods such as `document.getElementById`; I'm practicing this alternative approach to broaden my understanding of JavaScript. The calendar still uses `getElementById` to access the month heading and date grid.

## Accessibility

The month navigation and reset controls are buttons with accessible labels for screen readers. I also tested keyboard navigation with Tab and confirmed the controls can be reached in sequence and activated from the keyboard.
