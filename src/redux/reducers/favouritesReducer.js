// ☑️FavouritesReducer.js (gestisce lo stato dei preferiti)
// per definire il reducer che gestisce lo stato dei preferiti dell'applicazione.

//è stato definito il reducer favouritesReducer che gestisce le azioni ADD_TO_FAVOURITES e DELETE_FROM_FAVOURITES, aggiungendo o rimuovendo lavori dai preferiti.

import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from "../action/actions";

const initialState = {
  content: [],
};

const favouritesReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case DELETE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
