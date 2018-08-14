// 1) create a new component. This componenet should produce some html.

// 2) take this components generated HTML and put it on the page.(in the DOM)

//ES6 components are modularized.. silo'd from other files. can't reference other variables in other files.
//It must explicitly say it wants acess to the info
import React from 'react'; //go get the app called React and assign it to variable 'react'
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar'; //if we write the code imported, need file reference.
//youtube key
const API_KEY = 'key=AIzaSyChxDVncrFFW30mmRD9z1wvIUjEYwhYwUw';

//install youtube api search npm package.
//const is ES6 -
// () => fat arrow, like saying function()
const App =  () => {
    return(
    <div>
        <SearchBar />
    </div> //this is
    );
}



// Take this component's generated HTML and put it on the page.
ReactDom.render(<App/>, document.querySelector('.container'));