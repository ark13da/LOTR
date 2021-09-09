# ReadMe content:

[![The workflow](https://github.com/ark13da/LOTR/actions/workflows/main.yml/badge.svg)](https://github.com/ark13da/LOTR/actions/workflows/main.yml)

#### Introduction
#### The task
#### Dependencies and Setup
#### App architecture
#### Testing
#### Future development
#### Notes and considerations
#### Personal reflection 


## Introduction

This application was developed on Visma solutions' request as a coding exercise for the position of front end developer. 
In this document I explain how the App was designed and set up. furthermore, I try to air my opinion about further development of this App along with my points of concerns. 
The task description can be found under 'The task' section of this file. 


## The task

Familiarize yourself with API documentation at https://ringsdb.com and create a React app in which:
- the user can fetch decks from the API one at a time with the deck's id,
- after fetching the deck, present all hero cards from the deck,
- when user clicks on a card, the user can see the detailed information on the card,
- in the detailed informations, a modernized version for the card is displayed (a Card element), that should have the values of the card displayed similarly to the picture of the card

Use TypeScript for coding. You can use other libraries you'd prefer and styling can also be done by your preference. We hope that you try to show us your quality standards in the submission.

Wireframe can be found from: https://www.figma.com/file/mg1loDP3Z7XjfF6fC60CL3/RingsDB-Wireframe


## Dependencies and Setup

This is a React App that was written with TypeScript and it utilizes Redux for state management.

The app was created by NPM using ```npx create-react-app <appName> --template redux-typescript```

The sate management utilizes 'react-redux' and 'redux toolkit' libraries.

Axios was installed for handling fetch requests

For setting up the project in your local machine clone the repository and run ```npm install``` in the respective directory on your terminal.


## App architecture

### State and data flow

Redux store presents the single source of truth and all components only communicate with the store for both writing and reading the state.

Redux actions, reducers, and selectors were created in a slice (redux toolkit standard). since the App is small, only a single slice named 'lotrDeckSlice' was created instead of one slice per component. this slice exports actions (for modifying the state) and a selector (for reading the state). thus, components look at this slice for either reading or modifying the state.

The exceptions for above mentioned data flow pattern are 'DeckCards' and 'SingleCard' components:
'Deck' component recieves data from the state and maps it 'DeckCards' to render multiple DeckCards.
'SingleCard' component is a more extensive view of already rendered components 'DeckCards', but is displayed only when DeckCard is clicked. 

### Fetching data from external server

A custom hook 'useFetchDeck' was designed send get requests to external server and populate the state with the response. the hook is triggered each time user inputs a new search value that is validated and is dispatched to store. 

### Events sequence (Flow chart): 
```
- 0- The Deck components reads the store state:
    0.1- if state has error: displays user comprehensible error
    0.2- if no error: maps the data to DeckCards component and displays the cards
        0.2.1- user clicks on one card: conditional JSX statement is triggered and 'SingleCard' component is displayed with properties of selected card
1- User enters an input in search box (inputElement) and presses 'Enter'
2- Search component validates the input:
    2.1- if input is invalid: error is dispatched to store
    2.2- if input is valid, search term si dispatched to store
3- 'useFetchDeck' hook is triggered by any change to userInput property of store:
    3.1- if response has error: dispatch error to store ->(back to point 0.1)
    3.1- if no error: dispatch response to store and send additional get requests to remote server for fetching individual hero member information and dispatch to store ->(back to point 0.2)
```
### Styling

plain CSS was used for styling the app. each component has its own style file in its directory
I did not fully designed this app to be compatible with small mobile screens.

## Testing

React testing library was used for unit testing the components at a small scale of only 'Search' component due to time constraint. 
same type of tests shall be written for all components and services.
after unit tests, integration tests shall be developed to test interaction between components.


## Future development

## Notes and considerations

### HTML tags in fetched data

some properties of the response object from remote server contain HTML tags. Due to XSS threats I chose to treat them as string eventhough they don't present a good view because I do not know nor fully trust the data provider.

### accessibility issues 

I did not want to go against the wire-frame in my design however, the search box does not have a button which leaves us with questions. 
I could either trigger the custom hook after each character change in the search field which would send lots of unncessary requests,
or I could define 'Enter' key press as the trigger which makes working with the app on mobile devices a problem.
I chose the second option for development, but these matters shall be discussed with UX/UI team.

## Personal reflection 


