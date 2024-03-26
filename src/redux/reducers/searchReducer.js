// ☑️searchReducer.js (gestisce i risultati della ricerca)

//È stato aggiunto il file searchReducer.js per definire il reducer che gestisce lo stato dei risultati di ricerca dell'applicazione.
//In questo file è stato definito il reducer searchReducer che gestisce l'azione SEARCH_JOBS, aggiornando lo stato con i risultati della ricerca.

import { SEARCH_JOBS } from "../action/actions";

const initialState = {
  results: [],
};

const searchReducer = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_JOBS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
