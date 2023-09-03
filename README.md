# card-stack

## Setup Project:

First, clone the project into your machine.

### `npm install`
Runs this to install all dependencies and packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. 
</br>
</br>

## Component Name: Deck

### Overview:
The Flip Card Deck React Component is a dynamic card stack library built with React and React Spring. </br>
It allows users to interact with a stack of cards, dragging them freely with a realistic 3D flip animation effect.

### [Live Demo](https://card-stack.vercel.app/)

### Features:
* Interactive card stack with flip animation.
* Realistic 3D rotation and scaling effects.
* Supports dragging cards in both horizontal and vertical directions.
* Responsive design for various screen sizes.

### Configuration Options:
The Flip Card Deck React Component offers the following configuration options:

**Card Data (cards):** </br>
An array of image URLs representing the cards to be displayed in the stack.

**Gesture Handling (bind):** </br>
You can configure the direction (vertical and horizontal) of card dragging behavior. If both direction is set to **`true`**, the card can be dragged freely.
* **`verticalDrag`**: This will enable card to be drag vertically. Accept boolean value. Default value is set to **`false`**.
* **`horizontalDrag`**: This will enable card to be drag horizontally. Accept boolean value. Default value is set to **`true`**.

### Dependencies:
* **`react`**: The core React library.
* **`@react-spring/web`**: React Spring library for creating smooth animations.
* **`react-use-gesture`**: Library for handling touch and mouse gestures.
  
### Styling
The styling for the Flip Card Deck is defined in a CSS module. You can customize the appearance by modifying the styles in the accompanying **`styles.module.css`** file.

