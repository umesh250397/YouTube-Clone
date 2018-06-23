import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDvLSAyO4klUKSm1jdQW673XBCvKsTCb0o';

// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){   console.log(data); });
// //create a new component to produce some html
// const App = () => { // => is same as function keyword but 'this' has different meanings in both
//   //const : ES6 concept, declaring variable but with a final value not gonna change
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );  // JSX: subset or dialect of javascript allows to write html look-a-like js code
// } //take this component's generated HTML and put it on the page (in the DOM)

//refactoring functional components to a class based component
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });  //this.setState({videos : videos}) get simplified by ES6 as this.setState({videos})
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)} , 300); //calls this function every 300 mlliseconds

    return (
        <div>
          <SearchBar onSearchTermChange = {videoSearch}/>
          <VideoDetail video = {this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
      );    //passing data like this is called passing props . Data transfered from index.js to video_list.js i.e, videos is called props
  }
}

ReactDOM.render(<App />, document.querySelector('.container')); //App is like a class but we need to pass its instance here so making it into JSX creates its instance .it has second argument telling where to render the target code in HTML DOM

//Downward data flow  // to convert props in functional component to class based component change props to this.props
