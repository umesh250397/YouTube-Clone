import React,{ Component } from 'react';
        //{Component} means 'const Component = React.Component; it also means import Component property from react as Component variable
        //const SearchBar = () => {  return <input />; };   //React.createElement

//class component
//not just a dumb component but can tell us more like alert us when user types and what has been typed
class SearchBar extends Component {
        //Handling Events (to be written inside SearchBar class)
        // 1. Declare event handler
        // 2. pass it to the element being handled
          // render() { // necessary for each class
          //    return <input onChange={this.onInputChange} />;
          // }
          // onInputChange(event) { //we need an event object to handle the event it has all data
          //   console.log(event.target.value);
          // }
          // more compact code using arrow function
          // render() { //more compact code
          //    return <input onChange={ event => console.log(event.target.value)} />;
          //    //for single argument and single line code of function we can drop of the brackets
          // }

        //State is plain javaScript object used to record and react to user Events
        //each class based component that we define has its own State object
        //whenever component state is changed , component immediately rerenders and all of its children too
        //each instance has a different copy of State
        // we need to initialize before using it
        //for that we set property state to plain js abject inside class's constructor method

        //Control field is a form element whose value is set by the state rather the other way around

  constructor(props) {
    super(props); // calling parent class method using super

    this.state = {term: ''}; //state is initialized and only in constructor written like this everywhere else we use setState
  }

  render() { //more compact code
    // input is controlled element its value is updated rerendering while term updates as user types text
     return (
       <div className = "search-bar">
         <input
            value={this.state.term}
            onChange={ event => this.onInputChange(event.target.value)} />
       </div>
     );
     //Value of the input: {this.state.term}
     // we are just showing its value not updating it
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
