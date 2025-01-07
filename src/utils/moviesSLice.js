import { createSlice } from "@reduxjs/toolkit";


const moviesSlice  = createSlice(
    {
        name:"Movies",
        initialState:{
            nowPlayingMovies : null,
            trailerVideo: null,
            popularMovies:null,
            topRatedMovies:null,
            upcomingMovies : null,
            selectedMovieTrailerTowatch:null,
            detailsOfSelectedMovie:null,
            selectedMovieId:null
            
        },
        reducers:{
            addNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload
            },
            addTrailerVideo:(state,action)=>{
                state.trailerVideo = action.payload
            },
            addPopularMovies:(state, action)=>{
                state.popularMovies = action.payload;
            },
            addTopRatedMovies : (state, action)=>{
                state.topRatedMovies = action.payload
            },
            addUpcomingMovies :(state, action)=>{
                state.upcomingMovies = action.payload
            },
            addSelectedMovieTrailerTowatch:(state,action)=>{
                state.selectedMovieTrailerTowatch = action.payload
            },
            addDetailsOfSelectedMovies:(state,action)=>{
                state.detailsOfSelectedMovie = action.payload
            },
            addSelectedMovieId:(state,action)=>{
                state.selectedMovieId = action.payload
            }
        }
    }
) ;

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addSelectedMovieTrailerTowatch,addDetailsOfSelectedMovies,addSelectedMovieId} = moviesSlice.actions

export default moviesSlice.reducer;