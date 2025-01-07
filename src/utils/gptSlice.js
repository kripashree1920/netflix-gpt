import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"GptSearch",
    initialState:{
        gptSearch: false,
        movieTitle : null,
        SearchResultMovieList:null
    },

    reducers:{
        toggleGptSearchView:(state)=>{
            state.gptSearch = !state.gptSearch
        },
        addResultOfSearchedMovie:(state,action)=>{        
            const {movieTitle, SearchResultMovieList} = action.payload;
            state.movieTitle = movieTitle;
            state.SearchResultMovieList = SearchResultMovieList;
        }
    }
})

export const {toggleGptSearchView,addResultOfSearchedMovie} = gptSlice.actions
export default gptSlice.reducer