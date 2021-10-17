## Coding Challenge - API Consumption 


Countries API : [Git Repo](https://github.com/trevorblades/countries)

An application used to fetch countries and informations about them from an open API, built with React, GraphQL(Apollo), JavaScript(JSX) and Bootstrap(Bootswatch)

This project is a part of a coding challenge. This React web app utilizes the [Countries](https://countries.trevorblades.com/) public API with GraphQL implementation. 

The home page of app renders all countries of a continent which by default is Africa.
You can select different continent from a dropdown list to view countries of it, the app stores locally the last continent that the user selected. 
For every country the app shows on the screen, there is an image of the flag of country. The flag is being fetched by [flagcdn](https://flagcdn.com/ "flagcdn")  using the country code. Also the capital, continent ,currency  phone , languages and native name are the viewed informations.
Clicking on a country will fetch the wikipedia article from wikipedia API and display it on a React Component.
The user can view all countries to the screen by selecting the All Countries from navigation bar.  

## App Screen Shot
[![imagetitle](https://github.com/EneasLari/codingchallenge/blob/main/screenshot1.PNG "ScreenShot")](https://github.com/EneasLari/codingchallenge/blob/main/screenshot1.PNG "ScreenShot")


## Installation and Setup Instructions

1) Clone down this repository. You will need `node` , `npm` and `yarn` installed globally on your machine.  

2) Install all dependencies by runing :

### `yarn install`

3) After that you can run the available scripts:

###Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

You can view a live demo of this poject :
[Live Demo](https://codingchallenge-thechatshop.herokuapp.com/ "Live")
 

#### Packages used for this project:  
- React 
- GraphQL
- Axios
- local-storage
- React Router
