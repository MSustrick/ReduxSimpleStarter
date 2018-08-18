import React, {Component} from 'react';
//would be like saying... const Component = React.Component...

//would have been React.Component below, but we added it to the import
//plain js object
//extends.. extends js and pulls in React functionality.. coult be extends React.Component.. basically inherits react componenet class.
// every react component must have render component method. must return some jsx
class SearchBar extends Component{
    constructor(props){
        super(props); //calls parent class Component constructor with super keyword.
        this.state = {term: ''} //init it with a new object. term is like search term for our app

        //we only use this.state in the constructor... everywhere else we use setstate.
    }
    render() {
        //{this.onInputChange} is a js variable.. so it's wrapped in brackets inside the jsx
       // return <input onChange={ event =>  console.log(event.target.value)} />;

       //only use setState outside of the constructor.
       return (
           <div>

              <input  value = {this.state.term}
              onChange={ event =>  this.setState({term: event.target.value})} />

       </div>
       );

    };

/*     onInputChange(event){
        console.log(event.target.value);
        added for after input as example.
        Value of the input : {this.state.term}
    } */
}
/* const SearchBar = () => {
    return <input/>
};
 */
//have to export so it can be imported. Import to export what is going to be used.
export default SearchBar;