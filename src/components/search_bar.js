import React, {Component} from 'react';

//would have been React.Component below, but we added it to the import
//plain js object
//extends.. extends js and pulls in React functionality
class SearchBar extends Component{
    constructor(props){
        super(props); //calls parent class Component with super keyword.
        this.state = {term: ''} //init it with a new object. term is like search term for our app
    }
    render() {
        //{this.onInputChange} is a js variable.. so it's wrapped in brackets inside the jsx
       // return <input onChange={ event =>  console.log(event.target.value)} />;

       //only use setState outside of the constructor.
       return (
           <div>
       <input onChange={ event =>  this.setState({term: event.target.value})} />
       Value of the input
       </div>
       );
       
    };

/*     onInputChange(event){
        console.log(event.target.value);
    } */
}
/* const SearchBar = () => {
    return <input/>
};
 */
//have to export so it can be imported. Import to export what is going to be used.
export default SearchBar;