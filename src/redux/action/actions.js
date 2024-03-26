//☑️actions.js

//File Actions:è stato aggiunto per definire gli action creators, ovvero delle funzioni che restituiscono azioni.
//All'interno di questo file, sono state definite TRE AZIONI:

//1)addToFavouritesAction: aggiunge un lavoro ai preferiti.
//2)deleteFromFavouritesAction: rimuove un lavoro dai preferiti.
//3)searchJobsAction: esegue una ricerca di lavori in base a una query specifica.

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";
export const SEARCH_JOBS = "SEARCH_JOBS";

export const addToFavouritesAction = (jobData) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: jobData,
  };
};

export const deleteFromFavouritesAction = (index) => {
  return {
    type: DELETE_FROM_FAVOURITES,
    payload: index,
  };
};

export const searchJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: SEARCH_JOBS,
          payload: data,
        });
      } else {
        throw new Error("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
