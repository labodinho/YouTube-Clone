import React from 'react';
import { Grid } from '@material-ui/core'; //{} because its not a default and has alot from material

import { SearchBar, VideoDetails, VideoList } from './components'   //trick for using all components at ones.
// import SearchBar from './components/SearchBar';
// import VideoDetails from './components/VideoDetails';
// import VideoList from './components/videoList';

import youtube from './api/youtube'; //"youtube" typed directly because its a default is just one available



//2 types of components are CLASS BASED component and FUNCTION BASED component

//THIS IS CLASS BASED 
class App extends React.Component {
    state ={
        videos: [],
        selectedVideo: null,
    }
    componentDidMount() {
        this.handleSubmit('Node.js Tutorial')
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleSubmit = async (searchTerm) => { //async stops the execution of  the code until data is fetched
        const response = await youtube.get('search', {
            params: {
                part: 'snippet', //it will return video
                maxResults: 5, //max numbers of videos 
                key: 'AIzaSyBZhe3_b1PFUXnWbYx3TpLrl5jMIpt1lpc',
                q:searchTerm,
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
        
        // console.log(response.data.items);
    };
    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails videos={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        )
    }
}

export default App;
